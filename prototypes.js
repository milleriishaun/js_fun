let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
};

let newCar = Object.create(originalCar);
console.log(newCar.model);
newCar.model = '777ls';
console.log(newCar.model);
console.log(newCar.whatever);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.model);
//the above two seem the same... but what ahppens if
// we add a new doors property?


originalCar.doors = 4; //originalCar has this new property
console.log(newCar.doors);
//from the above, we see there is some kind
// of relationship

console.log(originalCar.hasOwnProperty('doors'));

console.log(newCar.hasOwnProperty('doors'));
//but does the newCar have it's own property called doors?
//false! This means it's just changing the reference
// the newCar does not have the same property as it's original
// (the newCar borrows the property from predecesors)





