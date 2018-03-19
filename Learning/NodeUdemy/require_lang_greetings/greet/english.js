var greetings = require('./greetings.json');
var printer = require('./printer');

var greet = function() {
    printer(greetings.en);
}

module.exports = greet;