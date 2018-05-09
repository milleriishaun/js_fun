//class declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}



// make instance of the object based on the class
let myCar = new Car('bmw', '745li', 2010);
myCar.print();


class SportsCar extends Car {
    revEngine() {
        console.log('vrrrrooom goes the ' + this.model);
    }
}


let mySportsCar = new SportsCar('Dodge', 'Viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();

// myCar.revEngine();


/* 
//class expression
let car = class {

}
 */