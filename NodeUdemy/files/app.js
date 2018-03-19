var fs = require('fs');

// synchronous code
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// asyncronous code
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data) {
    console.log(data + ' Im finally here!');
});

console.log('Done!');

// STREAMS

var readable = fs.createReadStream(__dirname + '/lorem.txt', { encoding: 'utf8', highWaterMark: 16*1024 });

var writable = fs.createWriteStream(__dirname + '/copy.txt');

// Streams extend the EventEmitter
// so the 'on' method is inherited
readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});