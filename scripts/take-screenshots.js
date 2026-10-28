const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const outputDir = 'C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3';

const screenshotCmd = `"${chromePath}" --headless=new --disable-gpu --window-size=1440,900 --virtual-time-budget=4000 --screenshot="${outputDir}/screenshot-hero.png" http://localhost:3000`;

console.log('Capturing Hero screenshot...');
execSync(screenshotCmd);
console.log('Hero screenshot saved!');

const screenshotFullCmd = `"${chromePath}" --headless=new --disable-gpu --window-size=1440,3600 --virtual-time-budget=5000 --screenshot="${outputDir}/screenshot-acts.png" http://localhost:3000`;
console.log('Capturing Acts screenshot...');
execSync(screenshotFullCmd);
console.log('Acts screenshot saved!');
