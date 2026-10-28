const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9223',
  '--window-size=1440,1100',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9223/json/list', (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', async () => {
      const list = JSON.parse(data);
      const page = list.find(t => t.type === 'page');
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      await new Promise(r => ws.onopen = r);
      function send(m, p={}) {
        return new Promise((res, rej) => {
          const id = Math.floor(Math.random()*10000);
          const h = (e) => {
            const msg = JSON.parse(e.data);
            if (msg.id === id) { ws.removeEventListener('message', h); res(msg.result); }
          };
          ws.addEventListener('message', h);
          ws.send(JSON.stringify({ id, method: m, params: p }));
        });
      }
      await send('Page.enable');
      await new Promise(r => setTimeout(r, 2000));
      await send('Runtime.evaluate', {
        expression: `
          const el = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('DE CADA 100'));
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        `
      });
      await new Promise(r => setTimeout(r, 1500));
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/screenshot-person-matrix.png', Buffer.from(shot.data, 'base64'));
      console.log('Matrix captured!');
      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
