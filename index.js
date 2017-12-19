var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200);
  if (req.url.indexOf('style.css') > 0) {
    res.end(fs.readFileSync('style.css'));
  } else if (req.url.indexOf('import.css') > 0) {
    setTimeout(function() {
      res.end(fs.readFileSync('import.css'));
    }, 200);
  } else {
    res.end(fs.readFileSync('index.html'));
  }
}).listen(3000);
console.log('Server running at http://localhost:3000/');
