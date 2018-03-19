var util = require('util');

function Person() {
    this.firstname = 'Pesho';
    this.lastname = 'Ivanov';
}

Person.prototype.greet = function() {
    console.log(`Hello ${ this.firstname } ${ this.lastname }!`);
}

function Policeman() {
    // Without this line the firstname and 
    // lastname will be undefined
    // because the person constructor
    // which sets them won't be invoked
    Person.call(this);



    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);


var officer = new Policeman();
officer.greet();
