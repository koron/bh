var bh = require('bh');
var http = require('http');

console.log(JSON.stringify(bh));

function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}

http.createServer(handler).listen(8080, '0.0.0.0');

// vim:set ts=8 sts=4 sw=4 tw=0 et:
