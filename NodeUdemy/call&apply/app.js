var person = {
    name: 'Pesho',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

person.greet();
person.greet.call();
// the call parameter object replaces the this object
person.greet.call({ name: 'Gosho' });
// apply does the same thing
person.greet.apply({ name: 'Ginka' });

// differance between call&appy is
// if the function has parameters 
// call takes them with commas
// and apply takes them as an array

var obj = {
    name: "Box",
    greet: function(arg1, arg2) {
        console.log(`Hey ${ this.name }, ${ arg1 }, ${ arg2 }`);
    }
}

obj.greet('##', '**');
obj.greet.call({ name: "Hammer" }, ':)', ':(');

var args = ['O.o', 'xD'];
obj.greet.apply({ name: "Hammer" }, args);