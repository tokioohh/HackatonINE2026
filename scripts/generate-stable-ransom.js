const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_BASE = 'c:/Users/oskar/Downloads/Resource-Boy-Ransom-Note-Letters/Resource Boy - Ransom Note Letters';
const DEST_BASE = 'c:/Users/oskar/Desktop/Code/Hackathon/public/ransom';
const TARGET_HEIGHT = 240;

const CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

const ACCENTS = {
  'Á': 'A',
  'É': 'E',
  'Í': 'I',
  'Ó': 'O',
  'Ú': 'U',
  'Ñ': 'N',
};

async function processAll() {
  console.log('--- Generating Perfectly Stable Ransom Letter Assets ---');
  const manifest = {};
  const dimensions = {};

  for (const char of CHARS) {
    const srcDir = path.join(SOURCE_BASE, char);
    const destDir = path.join(DEST_BASE, char);

    if (!fs.existsSync(srcDir)) {
      console.warn(`Source directory not found for ${char}: ${srcDir}`);
      continue;
    }

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const allFiles = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.png'));
    const items = [];

    for (const f of allFiles) {
      try {
        const meta = await sharp(path.join(srcDir, f)).metadata();
        const ratio = meta.width / meta.height;
        items.push({ file: f, path: path.join(srcDir, f), width: meta.width, height: meta.height, ratio });
      } catch (err) {
        // ignore unreadable
      }
    }

    // Determine target ratio ranges
    let minRatio = 0.65;
    let maxRatio = 1.15;
    let idealRatio = 0.85;

    if (char === 'I' || char === '1') {
      minRatio = 0.30;
      maxRatio = 0.70;
      idealRatio = 0.45;
    } else if (char === 'M' || char === 'W') {
      minRatio = 0.95;
      maxRatio = 1.45;
      idealRatio = 1.20;
    }

    // Score files by distance to ideal ratio
    items.sort((a, b) => Math.abs(a.ratio - idealRatio) - Math.abs(b.ratio - idealRatio));

    // Filter to acceptable bounds first
    let selected = items.filter(it => it.ratio >= minRatio && it.ratio <= maxRatio);
    if (selected.length < 8) {
      selected = items.slice(0, 8);
    } else {
      selected = selected.slice(0, 8);
    }

    // Calculate maximum width when scaled to TARGET_HEIGHT
    let maxW = 0;
    for (const item of selected) {
      const scaledW = Math.round(item.ratio * TARGET_HEIGHT);
      if (scaledW > maxW) maxW = scaledW;
    }

    // Ensure maxW is even for cleaner pixel rendering
    if (maxW % 2 !== 0) maxW += 1;

    dimensions[char] = {
      width: maxW,
      height: TARGET_HEIGHT,
      aspectRatio: Number((maxW / TARGET_HEIGHT).toFixed(4)),
    };

    manifest[char] = [];

    for (let i = 0; i < selected.length; i++) {
      const item = selected[i];
      const destFile = path.join(destDir, `${i + 1}.webp`);

      await sharp(item.path)
        .resize({
          width: maxW,
          height: TARGET_HEIGHT,
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .webp({ quality: 95 })
        .toFile(destFile);

      manifest[char].push(`/ransom/${char}/${i + 1}.webp`);
    }

    console.log(`[OK] Char '${char}': 8 variations generated, uniform box: ${maxW}x${TARGET_HEIGHT} (ratio: ${(maxW / TARGET_HEIGHT).toFixed(2)})`);
  }

  // Handle Accented characters
  for (const [accentChar, baseChar] of Object.entries(ACCENTS)) {
    const destDir = path.join(DEST_BASE, accentChar);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    manifest[accentChar] = [];
    dimensions[accentChar] = dimensions[baseChar];

    for (let i = 1; i <= 8; i++) {
      const srcFile = path.join(DEST_BASE, baseChar, `${i}.webp`);
      const destFile = path.join(destDir, `${i}.webp`);
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
        manifest[accentChar].push(`/ransom/${accentChar}/${i}.webp`);
      }
    }
    console.log(`[OK] Char '${accentChar}': copied from '${baseChar}' (uniform box: ${dimensions[accentChar].width}x${TARGET_HEIGHT})`);
  }

  // Save manifest & dimensions
  const manifestPath = 'c:/Users/oskar/Desktop/Code/Hackathon/src/lib/ransom-manifest.json';
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

  const dimPath = 'c:/Users/oskar/Desktop/Code/Hackathon/src/lib/ransom-dimensions.json';
  fs.writeFileSync(dimPath, JSON.stringify(dimensions, null, 2), 'utf-8');

  console.log('--- DONE: All ransom letters are now pixel-uniform and layout-shift free! ---');
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});
