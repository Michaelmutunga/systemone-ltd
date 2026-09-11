import sharp from 'sharp';
import { resolve } from 'path';

const srcDir = resolve('src/assets/New images');
const outDir = resolve('src/assets/products');

async function convert() {
  // Convert inventory stock taking for Featured Solutions section
  const srcPath = resolve(srcDir, 'Inventory stock taking .jfif');
  const outPath = resolve(outDir, 'inventory-stock-taking.webp');
  await sharp(srcPath).webp({ quality: 85 }).toFile(outPath);
  console.log('✓ Inventory stock taking.jfif → inventory-stock-taking.webp');

  // Convert library radar checkout for Featured Solutions section
  const checkoutSrc = resolve(srcDir, 'Library radar checkout .jfif');
  const checkoutOut = resolve(outDir, 'library-radar-checkout.webp');
  await sharp(checkoutSrc).webp({ quality: 85 }).toFile(checkoutOut);
  console.log('✓ Library radar checkout.jfif → library-radar-checkout.webp');

  // Copy new security gate image to replace -2 and -3 variants
  const gateSrc = resolve(outDir, 'rfid-security-gate-1.webp');
  const gate2 = resolve(outDir, 'rfid-security-gate-2.webp');
  const gate3 = resolve(outDir, 'rfid-security-gate-3.webp');
  await sharp(gateSrc).webp({ quality: 85 }).toFile(gate2);
  await sharp(gateSrc).webp({ quality: 85 }).toFile(gate3);
  console.log('✓ rfid-security-gate-1.webp → rfid-security-gate-2.webp & rfid-security-gate-3.webp');

  // Copy new inventory stock taker image to replace -2 and -3 variants
  const invSrc = resolve(outDir, 'inventory-stock-taker-1.webp');
  const inv2 = resolve(outDir, 'inventory-stock-taker-2.webp');
  const inv3 = resolve(outDir, 'inventory-stock-taker-3.webp');
  await sharp(invSrc).webp({ quality: 85 }).toFile(inv2);
  await sharp(invSrc).webp({ quality: 85 }).toFile(inv3);
  console.log('✓ inventory-stock-taker-1.webp → inventory-stock-taker-2.webp & inventory-stock-taker-3.webp');
}

convert();
