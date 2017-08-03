let names = ['David Bowie', "The Artist formerly known as Prince", 'John Lennon', 'Jimmi Hendrix',
  'Robert Plant', 'Paul McCartney', 'Gene Simmons', 'Stevie Nicks', 'Florence Welch', 'Sonny and Cher'];

//map names to objects

//ex: {name: "David Bowie"}

// const Names = names.map((name) => {
//   return {name: name};
// })
//
// console.log(Names);


// const mappedNames = names.map((name) => {
//   let rockstar = {name: name};
//   return rockstar;
// })
//
// console.log(mappedNames);

//map through just the first names
//return an array of the first names of the artists

// const firstNames = names.map((name) => {
//   return name.split(' ')[0];
// })
//
// console.log(firstNames);
//
// const filterNames = names.filter((name) =>{
//   if(name[0]=== 'J'){
//     return name;
//   }
// })
//
// console.log(filterNames);

// const filterFirstNamesWithJ = names.filter((name) => {
//   if(name[0] === "J") {
//     return name;
//   }
// }).map((name) => {
//   return name.split(' ')[0];
// })
//
// console.log(filterFirstNamesWithJ);


let shapes = [
  {name: "Square", color: "Green", sides: 4},
  {name: "Triangle", color: "Green", sides: 3},
  {name: "Rectangle", color: "Red", sides: 4},
  {name: "Pentagon", color: "Green", sides: 5},
  {name: "Hexagon", color: "Red", sides: 6}
]

// const findShapes = shapes.map((shape) =>{
//   return shape.name;
// })
//
// console.log(findShapes);

// const findGreen = shapes.filter((shape)=>{
//   if(shape.color === "Green"){
//     return shape;
//   }
// })
//
// console.log(findGreen);

const findSidesLessThan4 = shapes.filter((shape) => {
  if(shape.sides < 4){
    return shape;
  }
})

console.log(findSidesLessThan4);
