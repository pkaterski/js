function Emitter() {
    this.events = {}
}

Emitter.prototype.test = function() {
    console.log('test');
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;