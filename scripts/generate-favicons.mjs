import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { resolve } from 'path';

const src = resolve('public/system-one-logo.webp');
const outDir = resolve('public');

async function generate() {
  // Generate multiple PNG sizes for ICO
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(s => sharp(src).resize(s, s).png().toBuffer())
  );

  // Create proper ICO file
  const icoBuffer = await pngToIco(pngBuffers);
  const { writeFile } = await import('fs/promises');
  await writeFile(resolve(outDir, 'favicon.ico'), icoBuffer);

  console.log(`favicon.ico generated: ${icoBuffer.length} bytes (${sizes.join('x')} sizes)`);
}

generate();
