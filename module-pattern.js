var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + ' --- ' + count);
    }


    // return an object
    return {
        // value: count, //can't use this because creates a closure
        get: function() { return count; },
        set: function(value) { count = value; },

        increment: function() {
            count += 1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
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
