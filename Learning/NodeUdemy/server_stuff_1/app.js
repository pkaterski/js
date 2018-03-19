var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    var html;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    var message = 'Hello there :-)';
    html = html.replace('{Message}', message);

    res.end(html);
}).listen(2929, '127.0.0.1');