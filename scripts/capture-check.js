const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9235',
  '--window-size=1440,900',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9235/json/list', (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', async () => {
      const list = JSON.parse(data);
      const page = list.find(t => t.type === 'page');
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      await new Promise(r => ws.onopen = r);
      function send(m, p = {}) {
        return new Promise(r => {
          const id = Math.floor(Math.random() * 100000);
          const h = (e) => {
            const msg = JSON.parse(e.data);
            if (msg.id === id) {
              ws.removeEventListener('message', h);
              r(msg.result);
            }
          };
          ws.addEventListener('message', h);
          ws.send(JSON.stringify({ id, method: m, params: p }));
        });
      }
      await send('Page.enable');
      await new Promise(r => setTimeout(r, 2000));

      // 1. Scroll to Map
      await send('Runtime.evaluate', {
        expression: "document.querySelector('#mapa').scrollIntoView({ behavior: 'instant', block: 'start' });"
      });
      await new Promise(r => setTimeout(r, 1200));
      let shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-mapa-new.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-mapa-new.png');

      // 2. Scroll to Act 3 Questions
      await send('Runtime.evaluate', {
        expression: "window.scrollTo(0, 12250);"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-acto3-new.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-acto3-new.png');

      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
