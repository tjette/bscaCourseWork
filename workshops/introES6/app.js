function sayHi(name){
  return "Hello, there " + name + "!";
}

// console.log(sayHi("Travis"));

const sayHello = (name) => {
  return "Hello, there " + name + "!"
}
// console.log(sayHello("Travis"));

const sayHello2 = (name,age) => {
  return `Hello, there ${name}, whats your ${age}`;
}
// console.log(sayHello2("Travis", 30));

const sayHello3 = (name) => `Hello, there ${name}`

// console.log(sayHello3("Travis"));

function getSum(a,b){
  return a+b;
}

const getSumA = (a,b) => {
  return a + b;
}
// console.log(getSumA(3,6));

const numbers = [1,3,5,6,8,9,10]

var mappedNumbers = numbers.map(function(num){
  return {count: num}
});

const mappedNumbers2 = numbers.map((num) => {
  return {count: num};
})

// console.log(mappedNumbers2);

const filterNumbers = numbers.filter((n) => {
  return n > 6;
})

console.log(filterNumbers);

//Objects
//ES5
var name = "Travis";
var age = 30;

var person = {name: name, age: age};
console.log(person.name);

const nombre = "Travis";
const anons = 30;

const persona = {nombre, anons};

console.log(persona); 
