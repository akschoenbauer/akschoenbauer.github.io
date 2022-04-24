// defining an object
const myCar = new Object();

// object properties
// general syntax: objectName.propertyName = 'value';
myCar.color = 'Green';
myCar.make = 'Toyota';
myCar.model = '4Runner';
myCar.year = '2003';

console.log(myCar.make);

// a second way of defining an object and its properties:
const mySecondCar = {
  color: 'Silver',
  make: 'Toyota',
  model: '4Runner',
  year: '1997',
}

console.log(mySecondCar.year);

///////

// make this big chunk of JSON info an object by setting everything in the brackets = to superheros

let superheros = {
  'squadName': 'Super hero squad',
  'homeTown': 'Metro City',
  'formed': 2016,
  'secretBase': 'Super tower',
  'active': true,
  'members': [
    {
      // this is an array of [object, object, object]
      'name': 'Molecule Man',
      'age': 29,
      'secretIdentity': 'Dan Jukes',
      'powers': [
        'Radiation resistance',
        'Turning tiny',
        'Radiation blast'
      ]
    },
    {
      'name': 'Madame Uppercut',
      'age': 39,
      'secretIdentity': 'Jane Wilson',
      'powers': [
        'Million tonne punch',
        'Damage resistance',
        'Superhuman reflexes'
      ]
    },
    {
      'name': 'Eternal Flame',
      'age': 1000000,
      'secretIdentity': 'Unknown',
      'powers': [
        'Immortality',
        'Heat Immunity',
        'Inferno',
        'Teleportation',
        'Interdimensional travel'
      ]
    }
  ]
}

// this is saying go into the superheros object, then go to the members array, into the first object there (index 0)
// and then into the powers array and the second item in there (index 1)
// should return "turning tiny"
console.log(superheros['members'][0]['powers'][1]);

// function to add a new superhero - its built to be changeable - see function call below
function addHero(obj, heroName, heroAge, heroIdentity, heroPowers) {
  let hero = {
    'name': heroName,
    'age': heroAge,
    'secretIdentity': heroIdentity,
    'powers': heroPowers
  };
  obj['members'].push(hero); // the push() method adds a value to an object/array
}

// use the addHero function to add Batman to the members array
addHero(superheros, 'The Batman', 45, 'Bruce Wayne', ['money','technology','Alfred']);

// write some functions that will display the info from this json object in a nice way on the page

// function to put the superhero squad name in the website's header
// x is just a variable we'll reference later
function populateHeader (x) {
  // define where the header is in the HTML using a query selector
  const header = document.querySelector('header');
  // create an h1 element for the HTML using the createElement action
  const myH1 = document.createElement('h1');

  // tell the code what we want to put in the h1 content
  // call the key that holds the value we're looking for in the JSON file
  myH1.textContent = x['squadName'];
  // add/append the content of myH1 to the header
  header.appendChild(myH1);

  // now to do the same process again to create a paragraph element for some other info we want in the header
  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${x['homeTown']} // Formed: ${x['formed']}`;

  header.appendChild(myPara);
}

// another function: this one for making the heros and their properties show up on the page

function populateHeroes(obj) {
  // select the section in the HTML where we want this to appear
  const section = document.querySelector('section');
  // set a variable for heros by calling that object from the JSON
  const heroes = obj['members'];

  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// run the function
populateHeroes(superheros);
// run the function. fill the variable spot with the name of the json object
populateHeader(superheros);
