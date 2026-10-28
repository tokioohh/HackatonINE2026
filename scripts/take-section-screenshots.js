const { execSync } = require('child_process');
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const outputDir = 'C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3';

const sections = [
  { url: 'http://localhost:3000/#pregunta-apertura', file: 'screenshot-screen2.png' },
  { url: 'http://localhost:3000/#acto-1', file: 'screenshot-act1.png' },
  { url: 'http://localhost:3000/#acto-2', file: 'screenshot-act2.png' },
  { url: 'http://localhost:3000/#acto-3', file: 'screenshot-act3.png' }
];

for (const sec of sections) {
  console.log(`Capturing ${sec.file}...`);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=1440,900 --virtual-time-budget=3000 --screenshot="${outputDir}/${sec.file}" "${sec.url}"`;
  execSync(cmd);
}
console.log('All section screenshots captured!');
