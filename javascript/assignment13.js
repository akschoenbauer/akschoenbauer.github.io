const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// function will pick a random value from an array we will define
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// variables holding default story text
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// event listener that will run the result function
randomize.addEventListener('click', result);

function result() {
  // step 1: create a new variable called newStory and set it equal to storyText
  let newStory = storyText;
  // step 2: create 3 new variables called xItem, yItem, and zItem and make them equal to a result of calling randomValueFromArray()
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  // step 3: replace the three placeholders in the newStory string with the strings stored in xItem, yItem and zItem
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);
  newStory = newStory.replace(/:insertx:/g, xItem);

  // if customName value is not nothing,
  if(customName.value !== '') {
    // insert the custom name into the name value of the stories
    const name = customName.value;
    // step 4: find bob and replace name
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    // step 5: replace 300 with the formula that converts 300lbs into stones.
    const weight = Math.round(300/14);
    // concatonate ' stone' onto the end of the result of the math.round() call.
    // convert the math.round() result to a string and then add the ' stone' string to it
    newStory = newStory.replace(/300 pounds/g, weight+" stones");

    // perform the same operations you did to the weight variable to the temperature variable
    // convert fahrenheit to centigrade
    const temperature =  Math.round((94-32)*.5556);
    newStory = newStory.replace(/94 fahrenheit/g, temperature+" centigrade");
  }

// step 6: make the textContent property of the story variable = to newStory
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
