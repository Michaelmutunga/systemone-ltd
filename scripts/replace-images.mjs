import sharp from 'sharp';
import { resolve, basename } from 'path';
import { readdir } from 'fs/promises';

const srcDir = resolve('src/assets/New images');
const outDir = resolve('src/assets/products');

const mapping = {
  'RFID TAG .jfif': 'rfid-tag-1.webp',
  'RFID tag placement .jfif': 'rfid-tag-2.webp',
  'Desktop Reader .jfif': 'rfid-desktop-reader-1.webp',
  'RFID SECURITY GATES .jfif': 'rfid-security-gate-1.webp',
  'SELF SERVICE KIOSK .jfif': 'self-checkin-kiosk-1.webp',
  'Inventory stock taking .jfif': 'inventory-stock-taker-1.webp',
};

async function convert() {
  const files = await readdir(srcDir);
  let count = 0;

  for (const file of files) {
    const targetName = mapping[file];
    if (!targetName) continue;

    const srcPath = resolve(srcDir, file);
    const outPath = resolve(outDir, targetName);

    try {
      if (targetName.endsWith('.webp')) {
        await sharp(srcPath).webp({ quality: 85 }).toFile(outPath);
      } else {
        await sharp(srcPath).png().toFile(outPath);
      }
      console.log(`✓ ${file} → ${targetName}`);
      count++;
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nConverted ${count} images`);
}

convert();
