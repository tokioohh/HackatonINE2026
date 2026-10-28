const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9230',
  '--window-size=1440,900',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9230/json/list', (res) => {
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

      // Disable smooth scroll for instant CDP position jumping
      await send('Runtime.evaluate', {
        expression: "document.documentElement.style.scrollBehavior = 'auto';"
      });

      // 1. Sentencia estadística
      await send('Runtime.evaluate', {
        expression: "document.querySelector('#sentencia-estadistica').scrollIntoView(true);"
      });
      await new Promise(r => setTimeout(r, 1200));
      let shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-stats-sentence.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-stats-sentence.png');

      // 2. Timeline scroll testing: 2009, 2012, 2018, 2024
      const timelineInfo = await send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('#timeline');
          if (!el) return { error: 'no element #timeline' };
          return { top: el.offsetTop, height: el.offsetHeight, vh: window.innerHeight };
        })()`,
        returnByValue: true
      });
      console.log('timelineInfo raw:', JSON.stringify(timelineInfo));
      const resVal = timelineInfo.result ? timelineInfo.result.value : timelineInfo.value;
      const { top, height, vh } = resVal || {};
      console.log('Timeline dimensions:', { top, height, vh });

      const stops = [
        { label: 'timeline-2009.png', frac: 0.0 },
        { label: 'timeline-2012.png', frac: 0.2 },
        { label: 'timeline-2018.png', frac: 0.6 },
        { label: 'timeline-2024.png', frac: 1.0 },
      ];

      for (const s of stops) {
        const targetY = top + s.frac * (height - vh);
        await send('Runtime.evaluate', {
          expression: `window.scrollTo(0, ${targetY});`
        });
        await new Promise(r => setTimeout(r, 1200));
        shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/${s.label}`, Buffer.from(shot.data, 'base64'));
        console.log(`Saved ${s.label} at scrollY=${targetY}`);
      }

      // 3. Acto 3 (3 questions)
      await send('Runtime.evaluate', {
        expression: "document.querySelector('#acto-3').scrollIntoView(true);"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-acto3-clean.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-acto3-clean.png');

      // 4. BigStat with 10x10 matrix
      await send('Runtime.evaluate', {
        expression: "document.querySelector('#gran-estadistica').scrollIntoView(true);"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-bigstat-matrix.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-bigstat-matrix.png');

      // 5. Cta & Footer
      await send('Runtime.evaluate', {
        expression: "document.querySelector('footer').scrollIntoView(true);"
      });
      await new Promise(r => setTimeout(r, 1200));
      shot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync('C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/check-footer.png', Buffer.from(shot.data, 'base64'));
      console.log('Saved check-footer.png');

      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
