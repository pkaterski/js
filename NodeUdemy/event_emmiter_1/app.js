var Emitter = require('events');
var event = require('./config').events;

var emtr = new Emitter();

emtr.on(event.GREET ,() => {console.log('Somebody said hello');});

emtr.on(event.GREET , function() {
    console.log('Hello Back');
})

console.log('Hola');
emtr.emit(event.GREET);



emtr.on(event.KISS , () => {console.log('<3')});

console.log(';*');
emtr.emit(event.KISS);