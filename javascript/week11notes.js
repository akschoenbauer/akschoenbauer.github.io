// the "let" command defines a variable
let myVariable;
myVariable = 'ash';

// you can also define a variable all in one line
let myVariable2 = 'ashley';

myVariable = 'Celine';

/* This is a comment.
  It can be used for multi line comments */
// This is also a comment. This syntax is used for single line comments

// VARIABLES
let myVariable = 'bob'; // this is a STRING

let myNumber = 3; // this is a NUMBER

let myBoolean = true; // this is a BOOLEAN
let myBoolean = false; // booleans are used to see if things are true or false

let myArray = [1, 'bob', true] // this is an ARRAY. arrays can hold multiple different types of updateName

let myObject = document.querySelector('p'); // this is an OBJECT. however, all of the above variables are objects too.

// OPERATORS
6 + 9; // ADDITION

'Hello' + 'World' // STRING ADDITION (aka concatonation); will equal 'HelloWorld'

4-2; // SUBTRACTION

5*2; // MULTIPLICATION

4/2; // DIVISION

//ASSIGNMENT - use a single equal sign
myVariable = 'hello'

//EQUALITY
myNumber === 4; // <-- this will result in a boolean (will return true or false)

// NOT, DOES-NOT-EQUAL
!(myNumber === 3); // will return !(TRUE), which means False
myVariable !== 3; // will also return False

// CONDITIONALS

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
}
else {
  alert ('Awww, but chocolate is my favorite...')
}

// EVENT LISTENERS
document.querySelector('html').addEventListener('click',
function() {
  alert('Ouch! Stop Poking me!');
})
