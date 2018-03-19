var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'Pesho',
            lastname: 'Ivanov'
        }

        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end('not found');
    }
}).listen(2929, '127.0.0.1');