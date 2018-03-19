var greet = require('./greet');

var change = function() {
    greet.greeting = 'Changed~';
}

module.exports = change;