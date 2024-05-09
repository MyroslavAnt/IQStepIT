// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/data') {
//     const data = {
//       field1: 'Value1',
//       field2: 'Value2',
//       field3: 'Value3'
//     };

//     res.writeHead(200, {'Content-Type': 'application/json'});

//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('404 Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Сервер запущено на порту http://localhost:3000');
// });
