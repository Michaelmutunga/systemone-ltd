import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const src = path.join(root, 'src', 'assets');
const minBytes = 250 * 1024;

const files = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(png|jpe?g|jfif)$/i.test(entry.name)) files.push(full);
  }
};
walk(src);

let converted = 0;
let skipped = 0;
for (const file of files) {
  const orig = fs.statSync(file).size;
  if (orig < minBytes) continue;

  const ext = path.extname(file);
  const webpPath = file.replace(ext, '.webp');
  const isLogo = file.includes('system-one-logo');

  try {
    let pipeline = sharp(file);
    if (isLogo) pipeline = pipeline.resize({ width: 500, withoutEnlargement: true });
    const buf = await pipeline.webp({ quality: isLogo ? 90 : 82, effort: 6 }).toBuffer();

    if (buf.length < orig) {
      fs.writeFileSync(webpPath, buf);
      fs.unlinkSync(file);
      converted += 1;
      console.log(`CONVERT ${path.relative(root, file)}: ${(orig / 1024).toFixed(0)} KB -> ${(buf.length / 1024).toFixed(0)} KB`);
    } else {
      skipped += 1;
      console.log(`SKIP    ${path.relative(root, file)} (webp larger)`);
    }
  } catch (err) {
    console.log(`ERROR   ${path.relative(root, file)}: ${err.message}`);
  }
}

if (fs.existsSync(path.join(src, 'system-one-logo.webp'))) {
  const pub = path.join(root, 'public', 'system-one-logo.webp');
  fs.copyFileSync(path.join(src, 'system-one-logo.webp'), pub);
  console.log(`PUBCOPY ${path.relative(root, pub)}`);
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);