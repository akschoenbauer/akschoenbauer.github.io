//this line is a declaration. para is a variable we are defining, and querySelector tells the code to apply it to all 'p' elements
const para = document.querySelector('p');

//there are two variables in addEventListener - the initiating action (click), and what we want to happen when that action occurs (updateName variable)
para.addEventListener('click', updateName);

//now we will write a function to tell it what to do when the updateName variable is called
function updateName () {
  const name = prompt('Enter a  new name');
  para.textContent = `Player 1: ${name}`;
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContext = 'Mozilla is cool, ' + myName;
}

if (!localStoraage.getItem('name')) {
  setUserName();
}
else {
  let storedName = localStorage.getItem('name');
  myHeaading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
