var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    EventEmitter.call(this);
    this.greeting = 'Hello';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter = new Greeter();
greeter.on('greet', (data) => {console.log('Someone said hi ' + data)});

greeter.greet('Pesho');