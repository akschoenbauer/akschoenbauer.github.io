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
