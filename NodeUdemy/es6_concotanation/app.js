var greetLang = require('./lang.json');
var name = 'Pesho Ivanov';

function greet(lang){
    // template literal
    // the use of ` to concatanate strings
    var greeting = `${ greetLang[lang] } ${name}!`;
    console.log(greeting);
}

greet('bg');
greet('en');
greet('es');
greet('ee');