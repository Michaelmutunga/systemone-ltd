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
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const absoluteUrl = (pathname, req) => {
  const proto = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host || 'localhost';
  return `${proto}://${host}${pathname}`;
};

const readBody = (req) => new Promise((resolve, reject) => {
  const chunks = [];
  req.on('data', (c) => chunks.push(c));
  req.on('end', () => resolve(Buffer.concat(chunks).toString()));
  req.on('error', reject);
});

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const decoded = decodeURIComponent(pathname);

  // --- API: Contact Form ---
  if (decoded === '/api/contact' && req.method === 'POST') {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (req.method === 'OPTIONS') {
      res.writeHead(204, corsHeaders);
      return res.end();
    }
    if (!RESEND_API_KEY) {
      res.writeHead(500, { 'Content-Type': 'application/json', ...corsHeaders });
      return res.end(JSON.stringify({ success: false, error: 'RESEND_API_KEY not configured' }));
    }
    try {
      const body = JSON.parse(await readBody(req));
      const { name, email, company, service, message } = body;
      if (!name || !email || !message) {
        res.writeHead(400, { 'Content-Type': 'application/json', ...corsHeaders });
        return res.end(JSON.stringify({ success: false, error: 'name, email and message are required' }));
      }
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'System One Website <onboarding@resend.dev>',
          to: ['info@systemoneltd.com'],
          cc: ['michaelmutunga44@gmail.com'],
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${String(message).replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>This message was sent from the System One website contact form.</small></p>
          `,
        }),
      });
      if (!emailResponse.ok) {
        const errText = await emailResponse.text();
        throw new Error(`Resend API error: ${errText}`);
      }
      res.writeHead(200, { 'Content-Type': 'application/json', ...corsHeaders });
      return res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }));
    } catch (err) {
      console.error('Contact form error:', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: false, error: err.message }));
    }
  }

  // --- Legacy redirects ---
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