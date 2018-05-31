// let hi = () => { console.log('howdy'); }

// hi();
/* 
let hi = (name) => { console.log(`howdy ${name}`); };

hi(`bob`);
 */
/* 
let add = (a, b) => { return a + b };
console.log(add(7, 3));
 */



let names = ['david', 'eddie', 'alex', 'michael', 'bob' ];
/* 
names.map( (x) => { console.log(`howdy ${x}!`) } );

let i = 0;
names.map((name) => { i++; console.log(`howdy ${name} ${i}!!`) } );
 */

var transformed = names.map((name) => { return `howdy ${name}!!!!!` } );
console.log(transformed);
