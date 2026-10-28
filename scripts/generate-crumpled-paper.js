const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateCrumpledPaper() {
  const width = 1440;
  const height = 1440;

  // Multi-pass SVG filter for authentic wrinkled/creased broadsheet newspaper
  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <filter id="crumple" x="0%" y="0%" width="100%" height="100%">
      <!-- Large relief folds -->
      <feTurbulence type="turbulence" baseFrequency="0.008 0.012" numOctaves="4" seed="17" result="folds" />
      <!-- Sharp creases -->
      <feTurbulence type="turbulence" baseFrequency="0.025 0.035" numOctaves="5" seed="83" result="creases" />
      <feComposite in="folds" in2="creases" operator="arithmetic" k1="0" k2="0.65" k3="0.35" k4="0" result="combinedHeight" />
      
      <!-- 3D Lighting simulating directional top-left gallery light on crumpled paper -->
      <feDiffuseLighting in="combinedHeight" lighting-color="#FFFDF9" surfaceScale="5.5" diffuseConstant="1.15" result="light">
        <feDistantLight azimuth="55" elevation="50" />
      </feDiffuseLighting>

      <!-- Fine pulp fibers -->
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" seed="5" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.1  0 0 0 0 0.09  0 0 0 0 0.07  0 0 0 0.08 0" result="fibers" />

      <!-- Blend lighting with base newsprint tone -->
      <feBlend in="light" in2="SourceGraphic" mode="multiply" result="blendedPaper" />
      <feBlend in="fibers" in2="blendedPaper" mode="multiply" />
    </filter>

    <rect width="100%" height="100%" fill="#F1ECE1" filter="url(#crumple)" />
  </svg>
  `;

  const destDir = 'c:/Users/oskar/Desktop/Code/Hackathon/public/textures';
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  await sharp(Buffer.from(svg))
    .webp({ quality: 92 })
    .toFile(path.join(destDir, 'crumpled-paper.webp'));

  console.log('Successfully generated public/textures/crumpled-paper.webp');
}

generateCrumpledPaper().catch(console.error);
