// step 1: tell the javascript what to look for in the HTML and set a variable
  // 1st way: document.querySelector('button') --> this will look for all buttons in the html
  // 2nd way: document.querySelector('.new-quote button') --> this will look for the class "new-quote button" in the html
  // 3rd way: document.querySelector('#js-new-quote') --> this will look for the id "js-new-quote" in the html
  /* either querySelector or getElementById will work just fine. when using getElementById, you don't need to use
     the "#" in the quotations */
  /* js will look for the first instance of whatever we're looking for - class, tag, etc.. so typically, being more
     specific in our querySelectors is better */

  // so let's use the third way: looking for the ID
  // we'll also set our query to a varaible name so we can call it and reference it later in the code
const quoteButton = document.querySelector('#js-new-quote');

// step 2: add an event listener to look for a click
  // to do so: use .addEventListener
  /* call the variable we set before the "addEventListener" to tell it to look for this event happening to that
     variable specifically */
  /* in the parenthesis: ('click' --> corresponds to what event we're looking for, getQuote --> will be the function
     name that will tell the code what to do when this event happens) */
quoteButton.addEventListener('click', getQuote);

// step 3: assign a variable to the API LINK// assign a variable to the cat fact API link
const endpoint = "https://catfact.ninja/fact"

// step 4: write a function that tells the code what to do when the click event occurs
async function getQuote () {
  // console allows us to check if the function is working before we put time into writing it out
  /* go to live server page and open the inspect window. go to the console tab. here you'll be able to see this
    "quote button was clicked" message pop up when the button is clicked if your js is working properly.
    the console.log() element is very helpful for debugging code. */
  console.log("quote button was clicked");
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
    displayQuote(json.fact);
  }
    // next, we'll add another block of code that will run incase there is an error found by the try block
    catch (err) {
      console.log(err)
      alert('Failed');
    }
}

// step 5: write a function to display the cat fact returned by the API request
function displayQuote(quote) {
  // create a variable that will look for where we want the cat fact to appear in our HTML
  const quoteText = document.querySelector('#js-quote-text');
  // then we will tell the code to make the text content = what the "quote" element is from the JSON file from the API
  quoteText.textContent = quote;
}
