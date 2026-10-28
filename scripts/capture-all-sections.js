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
    '--remote-debugging-port=9222',
    '--window-size=1440,900',
    'http://localhost:3000'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  http.get('http://127.0.0.1:9222/json/list', (res) => {
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

        await new Promise(r => setTimeout(r, 2500));

        const captures = [
          { name: '01-hero-top.png', selector: '#hero' },
          { name: '03-act-one-silencio.png', selector: '#acto-1' },
          { name: '04-act-two-movilizacion.png', selector: '#acto-2' },
          { name: '05-act-three-desconexion.png', selector: '#acto-3' },
          { name: '06-generational-mirror.png', selector: '#generacion' },
          { name: '07-footer-tu-voto.png', selector: 'footer' }
        ];

        for (const item of captures) {
          console.log(`Scrolling to ${item.selector}...`);
          await sendCdp(ws, 'Runtime.evaluate', {
            expression: `document.querySelector('${item.selector}').scrollIntoView({ behavior: 'instant', block: 'center' });`
          });

          // Wait for Framer Motion entrance animations & typewriter animation to type out
          await new Promise(r => setTimeout(r, 1800));

          const shot = await sendCdp(ws, 'Page.captureScreenshot', {
            format: 'png',
            quality: 95
          });

          const buf = Buffer.from(shot.data, 'base64');
          fs.writeFileSync(`${outputDir}/${item.name}`, buf);
          console.log(`Saved ${item.name} (${buf.length} bytes)`);
        }

        console.log('All screenshots captured successfully!');
        ws.close();
        chrome.kill();
        process.exit(0);
      } catch (err) {
        console.error('CDP Error:', err);
        chrome.kill();
        process.exit(1);
      }
    });
  }).on('error', (e) => {
    console.error('HTTP Error:', e);
    chrome.kill();
    process.exit(1);
  });
}

main();
