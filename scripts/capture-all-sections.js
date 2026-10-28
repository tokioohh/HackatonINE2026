const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const outputDir = 'C:/Users/oskar/.gemini/antigravity/brain/729d1778-bebf-41af-a9cb-1e2696f3eeb3';

function sendCdp(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function main() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9225',
    '--window-size=1440,900',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  http.get('http://127.0.0.1:9225/json/list', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', async () => {
      try {
        const list = JSON.parse(data);
        const page = list.find(t => t.type === 'page' && t.url.includes('localhost:3000'));
        if (!page) throw new Error('Page target not found!');

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.onopen = r);
        console.log('Connected to Chrome page via CDP!');

        await sendCdp(ws, 'Page.enable');
        await sendCdp(ws, 'DOM.enable');

        await new Promise(r => setTimeout(r, 2000));

        // Disable smooth scrolling for instant capture
        await sendCdp(ws, 'Runtime.evaluate', {
          expression: `document.documentElement.style.scrollBehavior = 'auto'; document.body.style.scrollBehavior = 'auto';`
        });

        const captures = [
          { name: '01-unified-hero.png', selector: '#hero' },
          { name: '02-unified-acto1.png', selector: '#acto-1' },
          { name: '03-unified-votos-perdidos.png', selector: '#votos-perdidos' },
          { name: '04-unified-timeline-postits.png', selector: '#timeline' },
          { name: '05-unified-acto2.png', selector: '#acto-2' },
          { name: '06-unified-mapa.png', selector: '#mapa' },
          { name: '07-unified-acto3-matrix.png', selector: '#acto-3' },
          { name: '08-unified-explora.png', selector: '#explora' },
          { name: '09-unified-conciencia.png', selector: '#conciencia' },
          { name: '10-unified-footer.png', selector: 'footer' }
        ];

        for (const item of captures) {
          console.log(`Scrolling to ${item.selector}...`);
          await sendCdp(ws, 'Runtime.evaluate', {
            expression: `
              const el = document.querySelector('${item.selector}');
              if (el) {
                window.scrollTo(0, el.offsetTop);
              }
            `
          });

          await new Promise(r => setTimeout(r, 1200));

          const shot = await sendCdp(ws, 'Page.captureScreenshot', {
            format: 'png',
            quality: 95
          });

          const filePath = `${outputDir}/${item.name}`;
          fs.writeFileSync(filePath, Buffer.from(shot.data, 'base64'));
          console.log(`Saved ${item.name} (${shot.data.length} bytes)`);
        }

        console.log('All screenshots captured successfully!');
        ws.close();
        chrome.kill();
        process.exit(0);
      } catch (err) {
        console.error('Error during CDP capture:', err);
        chrome.kill();
        process.exit(1);
      }
    });
  });
}

main();
