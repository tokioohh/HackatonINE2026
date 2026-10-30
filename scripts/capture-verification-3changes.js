const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9241',
  '--window-size=1440,900',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9241/json/list', (res) => {
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

      // 1. Timeline slide
      await send('Runtime.evaluate', {
        expression: `
          const el = document.querySelector('#timeline');
          if (el) {
            window.scrollTo(0, el.offsetTop + 100);
          }
        `
      });
      await new Promise(r => setTimeout(r, 1200));
      let shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/timeline-slide-big-title.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved timeline-slide-big-title.png');

      // 2. CTA Section with buttons
      await send('Runtime.evaluate', {
        expression: "document.querySelector('#cta').scrollIntoView({ behavior: 'instant', block: 'center' });"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/cta-buttons-restored.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved cta-buttons-restored.png');

      // 3. Finale Slide: "Tu voto también vale"
      await send('Runtime.evaluate', {
        expression: "document.querySelector('footer section').scrollIntoView({ behavior: 'instant', block: 'start' });"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/footer-finale-slide.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved footer-finale-slide.png');

      // 4. Footer Credits drawer sliding up
      await send('Runtime.evaluate', {
        expression: "window.scrollTo(0, document.body.scrollHeight);"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/footer-credits-revealed.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved footer-credits-revealed.png');

      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
