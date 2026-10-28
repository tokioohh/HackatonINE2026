const http = require('http');
const { spawn } = require('child_process');

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9227',
  'http://localhost:3000'
]);

setTimeout(() => {
  http.get('http://127.0.0.1:9227/json/list', (res) => {
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
      const res = await send('Runtime.evaluate', {
        expression: 'Array.from(document.querySelectorAll("section, footer")).map(s => ({ tag: s.tagName, id: s.id, offsetTop: s.offsetTop, height: s.offsetHeight }))',
        returnByValue: true
      });
      console.log('Sections:', JSON.stringify(res.result.value, null, 2));
      chrome.kill();
      process.exit(0);
    });
  });
}, 2000);
