//// ASSIGNMENT 11 ////
//display current date JS
let today = new Date();
let month = today.getMonth()+1;
let year = today.getFullYear();
let date = today.getDate();
let currentDate = `${month}/${date}/${year}`;

function dateFunction() {
  document.getElementById("dateResult").innerHTML=currentDate;
}

//image array JS
imageArray = [
  "../img/bluejaycronch.jpg",
  "../img/bluejaypfp.jpg",
  "../img/profilePic.jpeg",
  "../img/thumbTest.png"
]

function getRandomImage() {
  // get a random index
  randomIndex= Math.floor(Math.random() * imageArray.length);

  //get an image at the randomIndex
  selectedImage= imageArray[randomIndex]

  //display the image
  document.getElementById("imgShower").src =`../img/${selectedImage}`
}
//// END ASSIGNMENT 11 ////

//// ASSIGNMENT 12 ////
// step 1: tell the javascript what to look for in the HTML and set a variable
  // 3rd way: document.querySelector('#js-new-dog') --> this will look for the id "js-new-dog" in the html
  // we'll also set our query to a varaible name so we can call it and reference it later in the code
const dogButton = document.querySelector('#js-new-dog');

// step 2: add an event listener to look for a click
  // to do so: use .addEventListener
  /* call the variable we set before the "addEventListener" to tell it to look for this event happening to that
     variable specifically */
  /* in the parenthesis: ('click' --> corresponds to what event we're looking for, getDog --> will be the function
     name that will tell the code what to do when this event happens) */
dogButton.addEventListener('click', getDog);
dogButton.addEventListener('click', getDogMessage);

// step 3: assign a variable to the API LINK// assign a variable to the cat fact API link
const endpoint = "https://dog.ceo/api/breeds/image/random"

// step 4: write a function that tells the code what to do when the click event occurs
async function getDog () {
  // console allows us to check if the function is working before we put time into writing it out
  /* go to live server page and open the inspect window. go to the console tab. here you'll be able to see this
    "dog button was clicked" message pop up when the button is clicked if your js is working properly.
    the console.log() element is very helpful for debugging code. */
  console.log("dog button was clicked");
  // try --> tries something. will try some code and see if there's an error; an error handling method
  try {
    // create a variable specific to this function. try to fetch the "endpoint" variable
    const response = await fetch(endpoint);
    // if the response you get is NOT "ok", do this:
    if (!response.ok) {
      throw Error(response.statusText)
    }
    // now, create another variable that will be implmented if there is no error found by the try block above
    // json is a file format readable by both humans and machines
    const json = await response.json();
    console.log(json);
    // this next line will tell the code to display the text found in the API file on our page, based on the displayQuote function we've defined below
    displayDog(json.message);
  }
    // next, we'll add another block of code that will run incase there is an error found by the try block
    catch (err) {
      console.log(err)
      alert('Failed');
    }
}

// step 5: write a function to display the dog image returned by the API request
function displayDog(image) {
  // create a variable that will look for where we want the cat fact to appear in our HTML
  const dogImageSrc = document.getElementById('dog-img').src = `${image}`;
  // then we will tell the code to make the text content = what the "quote" element is from the JSON file from the API
  dogImageSrc.textContent = image
}

// step 6: write an array and function to display little messages with each dog photo
// array JS
dogMessageArray = [
  "a very good boy",
  "look at this 12/10 floofer",
  "an absolute unit of a doggo",
  "who could resist this sweet face",
  "bork bork henlo doggo",
  "13/10 such a good girl",
  "how do u say 'you're the most precious thing in the universe' in dog?",
  "hello mr. pupper how can i help u today?",
  "hiya doggo!",
  "will u please be my forever bff?",
]

async function getDogMessage() {
  // get a random index
  ranIndex= Math.floor(Math.random() * dogMessageArray.length);

  //get an image at the randomIndex
  selectedMessage = dogMessageArray[ranIndex]

  //display the image
  document.getElementById("dog-message").textContent = `${selectedMessage}`
}
