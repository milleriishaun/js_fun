let counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(`${message} => ${count}`);
    }

    function getCount() { return count; }

    function setCount(value) { count = value; }

    function incrementCount() {
        count += 1;
        print('After increment: ');
    }

    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    //"reveals" the public functions
    // clearer presentation
    // however, you can (accidently) overwrite
    // the property values :/

    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };
})();


counter.increment();
counter.increment();
counter.increment();
counter.set(7);
console.log(counter.get()); //closure should be
// replaced with getter and setter functions

counter.increment();
counter.reset();

//module pattern

// the next thing is called a revealing module