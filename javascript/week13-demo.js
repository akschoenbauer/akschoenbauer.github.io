// FIRST DEMO - CIRCLE GENERATOR //
// create a variable that selects the button we want to run the circle function below
const btn = document.querySelector('button');

// create a variable to select the Canvas on the page
const canvas = document.querySelector('canvas');

// ctx stands for context, and we're telling it to be 2 dimensional
const ctx = canvas.getContext('2d');

// create a variable for the height and width that will get the height and width of the browser the client is using
// this assignment explains why the canvas is not always 200x200px as written in the html
const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

// these lines will make the canvas resize to whatever the size of the user's browser is based on the variables we assigned above
canvas.width = WIDTH;
canvas.height = HEIGHT;

// random function
// takes a parameter of 'number'
// returns some random number multiplied by the number we give it
// this funcition is referenced later in within the draw function to give us a random arc/size of circle
function random(number) {
  return Math.floor(Math.random()*number);
}

// draw function
// will run each time the button is clicked
// doesn't take any parameters
function draw() {
  // first, the function clears the canvas
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  // for loop
  // says that here is a variable i; let that be equal to 0. as long as i is less than 100, increase i by 1
  // this is what causes there to be 100 circles every time the function is run, because the function will stop running once i is equal to or greater than 100
  for (let i = 0; i < 250; i++) {
    ctx.beginPath();
    // make the circles red and 50% opacity
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    // generates the size and position of the circles
    // utilizes the random function written above
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }

    // let's make a copy of this for loop for fun
    for (let i = 0; i < 250; i++) {
      ctx.beginPath();
      // make the circles red and 50% opacity
      ctx.fillStyle = 'rgba(0,0,255,0.5)';
      // generates the size and position of the circles
      // utilizes the random function written above
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
  }
}

// create an event listener for the button that runs the "draw" function written above
// "btn" is pulled from the variable we assigned at the top of the page so that the java knows what button we want this event tied to
btn.addEventListener('click',draw);


// ANOTHER DEMO - CATS ARRAY //
// let's do something else interesting
// create an array of cats
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger']
// write a loop to cycle through the content in the array
for (const cat of cats){
  console.log(cats);
}


// ANOTHER DEMO - FOR LOOPS //
// querySelector looking for something with an ID of results
const results =
document.querySelector('#results');

// calculate function
function calculate() {
  // this loop runs 9 times
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  // this function will return a list of square multiplication problems
  results.textContent += '\n...finished!';
}

// looking for the first item with the ID of calculate
const calculateBtn =
document.querySelector('#calculate');
// looking for the first item with the ID of clear
const clearBtn =
document.querySelector('#clear');

// runs the calculate function when the calculate button is clicked
calculateBtn.addEventListener('click', calculate);
// this returns the textContent to an empty string when the clear button is clicked
clearBtn.addEventListener('click', () => results.textContent = '');



// ANOTHER DEMO - WHILE LOOPS //
// define an array of cat names
const cats = ['Pete', 'Biggles', 'Jasmine'];

// define a variable that holds a constant string that will appear
let myFavoriteCats = 'My cats are called ';

// assign i to 0 to begin with
let i = 0;

// while i is less than the length of the cats array, do this
while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  }
  else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++;
}

console.log(myFavoriteCats);  // "My cats are called Pete, Biggles, and Jasmine."
