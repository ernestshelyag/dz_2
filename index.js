const http = require('http');
const stopTimer = 5000;

const server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    const start = new Date();
    let timer = setInterval(function () {
      const date = new Date();
      console.log(date);
      if (date - start >= stopTimer) {
        clearInterval(timer);
        res.end('Start: ' + start.toUTCString() + '\nFinish: ' + date.toUTCString(), 'utf8');
      }
    }, 500);
  }
});

server.listen(3000);
