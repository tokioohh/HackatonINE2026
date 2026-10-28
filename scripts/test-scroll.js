const http = require('http');

http.get('http://127.0.0.1:9222/json/list', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', async () => {
    const list = JSON.parse(data);
    const page = list.find(t => t.type === 'page' && t.url.includes('localhost:3000'));
    if (!page) {
      console.log('No page on 9222');
      process.exit(1);
    }
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise(r => ws.onopen = r);
    function send(m, p = {}) {
      return new Promise((resolve) => {
        const id = Math.floor(Math.random() * 100000);
        const h = (e) => {
          const msg = JSON.parse(e.data);
          if (msg.id === id) {
            ws.removeEventListener('message', h);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', h);
        ws.send(JSON.stringify({ id, method: m, params: p }));
      });
    }

    const r = await send('Runtime.evaluate', {
      expression: `
        ['#hero', '#acto-1', '#votos-perdidos', '#timeline', '#acto-2', '#mapa', '#acto-3', '#explora', '#conciencia', 'footer'].map(s => {
          const el = document.querySelector(s);
          return { s, found: !!el, top: el ? el.offsetTop : null };
        })
      `,
      returnByValue: true
    });
    console.log(r.result.value);
    ws.close();
    process.exit(0);
  });
});
