var b1 = {
  name: "Pygmy Owl",
  species: "Owl",
  gender: "female",
  img: ""
};

var b2 = {
  name: "Western Meadowlark",
  species: 'Meadowlark',
  gender: 'male',
  img: ''
};

console.log(b1);
console.log(b2);

function Bird(name, species, gender, img){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
};

var b3 = new Bird('robin', 'bird', 'male', '')
var b4 = new Bird('something', 'bird', 'female', '')

console.log(b3);
console.log(b4);
