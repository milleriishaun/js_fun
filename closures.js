function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

sayHello('Bob')();
let bob = sayHello('bob');
bob();

let conrad = sayHello('Conrad');
let grant = sayHello('grant');

grant();
conrad();
bob();
