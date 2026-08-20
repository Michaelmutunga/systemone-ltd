import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.PNG': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2',
};

// Derive routes from the sitemap so prerendering always matches the indexable URLs.
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
  const { pathname } = new URL(match[1]);
  return pathname === '/' ? '/' : pathname;
});

if (routes.length === 0) {
  console.error('No routes found in public/sitemap.xml. Aborting prerender.');
  process.exit(1);
}

// Minimal static server for the built dist with SPA fallback.
const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const decoded = decodeURIComponent(pathname);
  let filePath = path.join(dist, decoded === '/' ? 'index.html' : decoded);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(dist, 'index.html');
  }
  const ext = path.extname(filePath).toLowerCase();
  res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
  res.end(fs.readFileSync(filePath));
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

// Third-party hosts that add noise or keep the network busy during snapshots.
const blockedHosts = ['vapi.ai', 'tile.openstreetmap.org', 'cdnjs.cloudflare.com'];

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

let failures = 0;

for (const route of routes) {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const host = new URL(req.url()).hostname;
    if (blockedHosts.some((blocked) => host === blocked || host.endsWith(`.${blocked}`))) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.setViewport({ width: 1366, height: 5000 });
  await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 45000 });
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Ensure scroll-reveal sections are fully visible in the captured HTML.
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('reveal-visible'));
  });
  await new Promise((resolve) => setTimeout(resolve, 100));

  const h1 = await page.evaluate(() => document.querySelector('main h1')?.textContent?.trim() ?? '');
  if (!h1) {
    console.error(`FAILED ${route}: no <h1> rendered`);
    failures += 1;
    await page.close();
    continue;
  }

  const html = await page.content();
  const outDir = route === '/' ? dist : path.join(dist, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`prerendered ${route} -> h1: "${h1}" (${(Buffer.byteLength(html) / 1024).toFixed(1)} kB)`);
  await page.close();
}

await browser.close();
server.close();

if (failures > 0) {
  console.error(`${failures} route(s) failed to prerender.`);
  process.exit(1);
}

console.log(`Prerendered ${routes.length} routes into dist/.`);