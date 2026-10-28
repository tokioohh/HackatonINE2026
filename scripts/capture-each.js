const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9232',
  '--window-size=1440,900',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9232/json/list', (res) => {
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

      const targets = [
        { name: '01-hero.png', id: '#hero' },
        { name: '02-acto1.png', id: '#acto-1' },
        { name: '03-stats-sentence.png', id: '#sentencia-estadistica' },
        { name: '04-votos-perdidos.png', id: '#votos-perdidos' },
        { name: '05-timeline.png', id: '#timeline' },
        { name: '06-acto2.png', id: '#acto-2' },
        { name: '07-mapa.png', id: '#mapa' },
        { name: '08-acto3.png', id: '#acto-3' },
        { name: '09-bigstat.png', id: '#gran-estadistica' },
        { name: '10-explora.png', id: '#explora' },
        { name: '11-conciencia.png', id: '#conciencia' },
        { name: '12-footer.png', id: 'footer' }
      ];

      for (const t of targets) {
        const evalRes = await send('Runtime.evaluate', {
          expression: `
            (() => {
              const el = document.querySelector('${t.id}');
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: 'start' });
                return { scrolledTo: el.offsetTop, scrollY: window.scrollY };
              }
              return { error: 'not found' };
            })()
          `,
          returnByValue: true
        });
        console.log(t.id, evalRes.result.value);
        await new Promise(r => setTimeout(r, 1200));

        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(`C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3/${t.name}`, Buffer.from(shot.data, 'base64'));
        console.log(`Saved ${t.name}`);
      }

      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
