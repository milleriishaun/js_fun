


// datatype null represents a variable that points to nothing,
// but an object reference was expected in that case
// like making a variable but not setting the value
let a;
console.log(a);
console.log(typeof a);
//null is different from undefined.

let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);
console.log(typeof result); //what? why obj
//there is no returning of the null primative
// this is a bug and this will; not be changed
// this si because f granfathered in programs and interactions

//with getting null back, we can check the result
// this is interesting, b/c can be helpful when building apps
if (result === null) {
    console.log('no match was found');
}
// null is not undefined... means theres a var but not set reference.
// expecting an object reference but none had
// undefined is different because it is looking for a specific value type and it is nt o getting it
// undefined is expecting a value but never set, null is reference not found though expecting


