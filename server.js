var bh = require('bh');
var context = new bh.context();

var http = require('http');
http.createServer(function(req, res) {
    context.handle(req, res);
}).listen(8080, '0.0.0.0');

console.log('Server version ' + bh.version + ' (r' + bh.revision + ') start');

// vim:set ts=8 sts=4 sw=4 tw=0 et:
