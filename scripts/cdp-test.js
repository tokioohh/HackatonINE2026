const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const outputDir = 'C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3';

async function main() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--window-size=1440,900',
    'about:blank'
  ]);

  // wait 1 second for port to be ready
  await new Promise(r => setTimeout(r, 1200));

  // Get debug target
  http.get('http://127.0.0.1:9222/json/new?http://localhost:3000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      const target = JSON.parse(data);
      const wsUrl = target.webSocketDebuggerUrl;
      console.log('Target created:', wsUrl);

      const WebSocket = require('ws');
      // If ws not installed, we can check or install
    });
  }).on('error', (e) => {
    console.log('Error:', e.message);
    chrome.kill();
  });
}

main();
