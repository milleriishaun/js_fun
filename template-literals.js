/* 
// thsi is a template literal
// some is template and some is literal
//Allows you to use multiiline s too
let name = 'bob';

console.log(`hi ${name}`);

let sentence = `this is reall a conveinence.
    you probably will  never want to do something
    quite like this.
   spaces
  and intdentaTIONA IS saved.`;

console.log(sentence);
 */


//adding template literals to checklist
function getReasonCount() { return 0; }

let interpolation = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`;

console.log(interpolation);