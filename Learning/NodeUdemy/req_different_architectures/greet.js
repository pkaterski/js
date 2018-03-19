function Greet() {
    this.greeting = 'Hello !';
    this.greet = function() {
        return this.greeting;
    }
}

module.exports = new Greet();