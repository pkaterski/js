var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/lorem.txt');

var writable = fs.createWriteStream(__dirname + '/copy.txt');

readable.pipe(writable);

// does the same thing as
// readable.on('data', function(chunk) {
//     writable.write(chunk);
// });

var compressed = fs.createWriteStream(__dirname + '/lorem.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);