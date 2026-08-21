import sharp from 'sharp';
import { resolve } from 'path';

const src = resolve('public/system-one-logo.webp');
const outDir = resolve('public');

async function generate() {
  await sharp(src).resize(32, 32).png().toFile(resolve(outDir, 'favicon-32x32.png'));
  await sharp(src).resize(16, 16).png().toFile(resolve(outDir, 'favicon-16x16.png'));
  await sharp(src).resize(180, 180).png().toFile(resolve(outDir, 'apple-touch-icon.png'));
  console.log('Favicon PNGs generated from system-one-logo.webp');
}

generate();
