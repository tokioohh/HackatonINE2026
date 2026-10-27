import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { deflateSync } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "textures");
mkdirSync(OUT, { recursive: true });

function makePNG(w, h, rgba) {
  function crc32(buf) {
    let c = 0xffffffff;
    const table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let v = n;
      for (let k = 0; k < 8; k++) v = v & 1 ? 0xedb88320 ^ (v >>> 1) : v >>> 1;
      table[n] = v;
    }
    for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeData = Buffer.concat([Buffer.from(type), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeData));
    return Buffer.concat([len, typeData, crc]);
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Filter each row with filter type 0 (None)
  const raw = Buffer.alloc(h * (1 + w * 4));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + w * 4)] = 0; // filter byte
    for (let x = 0; x < w; x++) {
      const si = (y * w + x) * 4;
      const di = y * (1 + w * 4) + 1 + x * 4;
      raw[di] = rgba[si];
      raw[di + 1] = rgba[si + 1];
      raw[di + 2] = rgba[si + 2];
      raw[di + 3] = rgba[si + 3];
    }
  }

  const compressed = deflateSync(raw);
  const iend = Buffer.alloc(0);

  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", compressed), chunk("IEND", iend)]);
}

// --- Paper grain texture ---
{
  const W = 256, H = 256;
  const data = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const v = Math.floor(Math.random() * 50);
    data[i * 4] = v;
    data[i * 4 + 1] = v;
    data[i * 4 + 2] = v;
    data[i * 4 + 3] = 30 + Math.floor(Math.random() * 25);
  }
  writeFileSync(join(OUT, "grain.png"), makePNG(W, H, data));
  console.log("grain.png");
}

// --- Heavy grain ---
{
  const W = 200, H = 200;
  const data = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const v = Math.floor(Math.random() * 80);
    data[i * 4] = v;
    data[i * 4 + 1] = v;
    data[i * 4 + 2] = v;
    data[i * 4 + 3] = 40 + Math.floor(Math.random() * 40);
  }
  writeFileSync(join(OUT, "grain-heavy.png"), makePNG(W, H, data));
  console.log("grain-heavy.png");
}

// --- Concrete ---
{
  const W = 400, H = 400;
  const data = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    const base = 65 + Math.floor(Math.random() * 30);
    data[i * 4] = base;
    data[i * 4 + 1] = base;
    data[i * 4 + 2] = base;
    data[i * 4 + 3] = 255;
  }
  // Blotches
  for (let b = 0; b < 50; b++) {
    const cx = Math.floor(Math.random() * W);
    const cy = Math.floor(Math.random() * H);
    const r = 8 + Math.floor(Math.random() * 40);
    const dark = Math.random() > 0.5;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dy * dy > r * r) continue;
        const px = cx + dx, py = cy + dy;
        if (px < 0 || px >= W || py < 0 || py >= H) continue;
        const idx = (py * W + px) * 4;
        const shift = dark ? -10 - Math.floor(Math.random() * 10) : 5 + Math.floor(Math.random() * 8);
        data[idx] = Math.min(255, Math.max(0, data[idx] + shift));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + shift));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + shift));
      }
    }
  }
  writeFileSync(join(OUT, "concrete.png"), makePNG(W, H, data));
  console.log("concrete.png");
}

// --- Paper stains ---
{
  const W = 600, H = 600;
  const data = new Uint8Array(W * H * 4);
  // Start fully transparent
  for (let i = 0; i < W * H * 4; i++) data[i] = 0;

  // Coffee ring stains
  for (let s = 0; s < 4; s++) {
    const cx = 80 + Math.floor(Math.random() * 440);
    const cy = 80 + Math.floor(Math.random() * 440);
    const r = 35 + Math.floor(Math.random() * 70);
    const ringW = 4 + Math.floor(Math.random() * 10);
    for (let dy = -r - ringW; dy <= r + ringW; dy++) {
      for (let dx = -r - ringW; dx <= r + ringW; dx++) {
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < r - ringW / 2 || dist > r + ringW / 2) continue;
        const px = cx + dx, py = cy + dy;
        if (px < 0 || px >= W || py < 0 || py >= H) continue;
        const idx = (py * W + px) * 4;
        data[idx] = 140;
        data[idx + 1] = 100;
        data[idx + 2] = 50;
        data[idx + 3] = Math.min(255, data[idx + 3] + 8 + Math.floor(Math.random() * 12));
      }
    }
  }

  // Foxing spots
  for (let f = 0; f < 60; f++) {
    const cx = Math.floor(Math.random() * W);
    const cy = Math.floor(Math.random() * H);
    const r = 1 + Math.floor(Math.random() * 5);
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dy * dy > r * r) continue;
        const px = cx + dx, py = cy + dy;
        if (px < 0 || px >= W || py < 0 || py >= H) continue;
        const idx = (py * W + px) * 4;
        data[idx] = 130;
        data[idx + 1] = 90;
        data[idx + 2] = 40;
        data[idx + 3] = Math.min(255, data[idx + 3] + 6 + Math.floor(Math.random() * 10));
      }
    }
  }

  // Fold crease
  for (let x = 0; x < W; x++) {
    const y = Math.floor(200 + (x / W) * 200 + (Math.random() - 0.5) * 3);
    for (let t = -1; t <= 1; t++) {
      const py = y + t;
      if (py < 0 || py >= H) continue;
      const idx = (py * W + x) * 4;
      data[idx] = 0;
      data[idx + 1] = 0;
      data[idx + 2] = 0;
      data[idx + 3] = Math.min(255, data[idx + 3] + 8);
    }
  }

  writeFileSync(join(OUT, "stains.png"), makePNG(W, H, data));
  console.log("stains.png");
}

// --- Torn edge horizontal ---
{
  const W = 1200, H = 80;
  const data = new Uint8Array(W * H * 4);
  // Fully transparent
  for (let i = 0; i < W * H * 4; i++) data[i] = 0;

  // Build torn edge — fill from top to jagged line
  let edgeY = 40;
  const edgePoints = [];
  for (let x = 0; x < W; x++) {
    edgeY += (Math.random() - 0.5) * 4;
    if (Math.random() < 0.04) edgeY += (Math.random() - 0.5) * 15;
    edgeY = Math.max(10, Math.min(70, edgeY));
    edgePoints.push(Math.floor(edgeY));
  }

  for (let x = 0; x < W; x++) {
    const ey = edgePoints[x];
    for (let y = 0; y < ey; y++) {
      const idx = (y * W + x) * 4;
      data[idx] = 242;
      data[idx + 1] = 234;
      data[idx + 2] = 214;
      data[idx + 3] = 255;
    }
    // Fuzzy edge — fibers
    for (let y = ey; y < Math.min(ey + 6, H); y++) {
      const idx = (y * W + x) * 4;
      const fade = 1 - (y - ey) / 6;
      if (Math.random() < fade * 0.5) {
        data[idx] = 230;
        data[idx + 1] = 220;
        data[idx + 2] = 200;
        data[idx + 3] = Math.floor(fade * 180);
      }
    }
  }

  writeFileSync(join(OUT, "torn-edge-h.png"), makePNG(W, H, data));
  console.log("torn-edge-h.png");
}

// --- Torn edge vertical (for transition) ---
{
  const W = 80, H = 1000;
  const data = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H * 4; i++) data[i] = 0;

  let edgeX = 40;
  const edgePoints = [];
  for (let y = 0; y < H; y++) {
    edgeX += (Math.random() - 0.5) * 5;
    if (Math.random() < 0.05) edgeX += (Math.random() - 0.5) * 18;
    edgeX = Math.max(10, Math.min(70, edgeX));
    edgePoints.push(Math.floor(edgeX));
  }

  for (let y = 0; y < H; y++) {
    const ex = edgePoints[y];
    for (let x = 0; x < ex; x++) {
      const idx = (y * W + x) * 4;
      data[idx] = 255;
      data[idx + 1] = 255;
      data[idx + 2] = 255;
      data[idx + 3] = 255;
    }
    for (let x = ex; x < Math.min(ex + 5, W); x++) {
      const idx = (y * W + x) * 4;
      const fade = 1 - (x - ex) / 5;
      if (Math.random() < fade * 0.4) {
        data[idx] = 255;
        data[idx + 1] = 255;
        data[idx + 2] = 255;
        data[idx + 3] = Math.floor(fade * 150);
      }
    }
  }

  writeFileSync(join(OUT, "torn-edge-v.png"), makePNG(W, H, data));
  console.log("torn-edge-v.png");
}

console.log("Done — all textures in public/textures/");
