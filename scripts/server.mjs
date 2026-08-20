import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

const LEGACY_REDIRECTS = {
  '/campusCURA': '/campus-cura',
  '/LibraryRadar': '/library-radar',
  '/HardwareProducts': '/hardware-products',
  '/rfid-solutions': '/services',
};

const PORT = Number(process.env.PORT || 8080);

const absoluteUrl = (pathname, req) => {
  const proto = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host || 'localhost';
  return `${proto}://${host}${pathname}`;
};

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const decoded = decodeURIComponent(pathname);

  if (LEGACY_REDIRECTS[decoded]) {
    res.writeHead(301, { Location: absoluteUrl(LEGACY_REDIRECTS[decoded], req) });
    return res.end();
  }

  if (decoded === '/index.html') {
    res.writeHead(301, { Location: absoluteUrl('/', req) });
    return res.end();
  }

  let filePath = decoded === '/' ? path.join(dist, 'index.html') : path.join(dist, decoded);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    return res.end(fs.readFileSync(path.join(dist, '404.html')));
  }

  const ext = path.extname(filePath).toLowerCase();
  const headers = { 'Content-Type': MIME[ext] ?? 'application/octet-stream' };
  headers['Cache-Control'] = decoded.startsWith('/assets/')
    ? 'public, max-age=31536000, immutable'
    : 'public, max-age=300';
  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving ${dist} on http://0.0.0.0:${PORT}`);
});