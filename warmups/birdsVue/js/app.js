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

function Bird(name, species, gender, img, predator){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;
};

var b3 = new Bird('robin', 'bird', 'male', '')
var b4 = new Bird('something', 'bird', 'female', '')
var b5 = new Bird('penguin', 'african', 'male', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dl2WX2fiXXOH3UmyV1DeumHTLfqOgT72ZhmRlk2BZkv7Na-UhQ');
var b6 = new Bird('parrot', 'cockatiel', 'female', '');
var b7 = new Bird('osprey', 'birds', 'female', '', true);


console.log(b3,b4,b5,b6,b7);
var title = "Birds Collection";
var birds = new Array()
birds.push(b3,b4,b5,b6,b7);
console.log(birds);

var app = new Vue({
  el: "#app",
  data: {
    title: title,
    birds: birds,
    name: undefined,
    species: undefined,
    gender: undefined,
    img: undefined
  }
});
