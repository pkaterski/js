// requires the new object
var greet = require('./greet');
console.log(greet.greet());
// changes the text of the greeting
greet.greeting = 'New Greeting';

var greet1 = require('./greet');
// NO NEW OBJECT CREATED
// Uses the same cached object from greet (greet = greet1)
// So the text has changed
console.log(greet1.greet());

// Again changing the text of the cached object
// from a differnt file
var change = require('./cange');
change();
console.log(greet.greet());

var gr = require('./greet1');
gr.greeting = "fuck"; // new property in object
                      // doesnt affect the gr.greet fnc
gr.greet();
console.log(gr);