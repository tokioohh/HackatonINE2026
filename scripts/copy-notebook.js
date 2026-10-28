const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/.user_uploaded';
const targetDir = 'c:/Users/oskar/Desktop/Code/Hackathon/public/textures/notebook';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mapping = {
  'media_1793128968970_85768394.jpg': 'grid-paper-crumpled.jpg',
  'media_1793128968971_853d9fa7.png': 'torn-strip-margin.png',
  'media_1793128968972_581e9f4b.webp': 'spiral-sheet-tape.webp',
  'media_1793128968989_e67acaf8.png': 'postit-yellow-tape.png'
};

for (const [src, dest] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(targetDir, dest);
  fs.copyFileSync(srcPath, destPath);
  const stat = fs.statSync(destPath);
  console.log(`Copied ${src} -> ${dest} (${stat.size} bytes)`);
}
