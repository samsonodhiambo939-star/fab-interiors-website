const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\aaaaa\\Documents\\matich\\WhatsApp Image 2026-07-02 at 6.21.55 PM.jpeg";
const outDir = "C:\\Users\\aaaaa\\Downloads\\New folder\\public";

async function main() {
  const greenBg = { r: 27, g: 59, b: 47, alpha: 1 };

  const tasks = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon.ico' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ];

  for (const { size, name } of tasks) {
    const buf = await sharp(src)
      .resize(size, size, { fit: 'contain', background: greenBg })
      .png()
      .toBuffer();

    if (name.endsWith('.ico')) {
      fs.writeFileSync(path.join(outDir, name), pngAsIco([buf], [size]));
    } else {
      fs.writeFileSync(path.join(outDir, name), buf);
    }
    console.log(`Created ${name} (${size}x${size})`);
  }

  console.log('Done!');
}

function pngAsIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let dir = Buffer.alloc(0);
  let data = Buffer.alloc(0);
  let offset = 6 + count * 16;

  for (let i = 0; i < count; i++) {
    const png = pngBuffers[i];
    const w = Math.min(sizes[i], 255);
    const h = Math.min(sizes[i], 255);

    const entry = Buffer.alloc(16);
    entry.writeUInt8(w, 0);
    entry.writeUInt8(h, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    dir = Buffer.concat([dir, entry]);

    data = Buffer.concat([data, png]);
    offset += png.length;
  }

  return Buffer.concat([header, dir, data]);
}

main().catch(console.error);
