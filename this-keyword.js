/* var car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription(); */

function first() {
    return this;
}

console.log(first() === global); //global object inside node
//global object of node is the basic global namespace

// when we call first , is "this" equal to the global object?
// result: true, so then it is a basic node object
// basic node space === to "this"

function second() {
    'use strict';

    return this;
}

console.log(second() === global);

// we get false now, because the function was called differently
// the rules around binding "this" will fundamentally change how it works

//flag in Javascript changes how "this" keyword is bound.

console.log(second() === undefined);
// true, so it is bound to "essentially nothing"
// the rules of how "this" is bound depend on how the method is called.




// property of value... set to my object
let myObject = { value: 'My Object' };

//value is set on the global objecT
//new property is created onthe global object
//this property is set on the global object
global.value  = 'Global object';

function third(name) {
    return this.value + name;
}

console.log(third());
//because we called "this" from the global namespace,
// there are other ways of invoking the third function
//we can control the bindding of the "this"

//call is simply a method that comes with third
console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob']));

//call and apply are very similar, jsut adding mroe terms either in array or next , in list
//this is how to bind the this value to myObject
// this way, the value is pulled from myObject rather than global


// when it comes to calling a method of an
// object(printDescription), the call site(car.) will be the object
// itself, and all of the properties are
// available when there is correct context
// of "this".
// object reference of car ggets bound to "this"
function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tobal',
    print: fifth
}

let customer2 = {
    firstName: 'steve',
    lastName: 'guy',
    print: fifth
}

customer2.print();
customer1.print();
// this allows passing values to the function w/o defining values in function itself

