
let car = {
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

car.printDescription();
console.log(car.getPrice());
console.log(car.year);

// console.log(car['year']);
// console.log(car[1]);
/* 
var anotherCar = {};
console.log(anotherCar.whatever = 'bob');
 */
/* 
var a = {
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b);
 */
//object graph
var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ]
};

console.log(c.myProperty.f);

let carLot = [
    { year: 1985, make: 'Buick', model: 'Skylark' },
    { year: 1985, make: 'Buick', model: 'Skylark' },
    { year: 1985, make: 'Buick', model: 'Skylark' },
    { year: 1985, make: 'Buick', model: 'Skylark' },
];



// very similar to .JSON format
let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phonenumbers: [ '(123) 456-5432', '(321) 111-3333']}
        { firstName: 'Bob', lastName: 'Tabor', phonenumbers: [ '(123) 456-5432', '(321) 111-3333']}
    ],
    employees: [
        { firstName: 'Bob', lastName: 'Tabor', phonenumbers: [ '(123) 456-5432', '(321) 111-3333']}
        { firstName: 'Bob', lastName: 'Tabor', phonenumbers: [ '(123) 456-5432', '(321) 111-3333']}
        { firstName: 'Bob', lastName: 'Tabor', phonenumbers: [ '(123) 456-5432', '(321) 111-3333']}
    ]
}