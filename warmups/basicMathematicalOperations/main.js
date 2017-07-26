
//operators:

// add +
// subtract -
// multiply *
// divide /
// modulo %

var basicOp = function(math, num1, num2){
  if(math === "+"){
    return num1 + num2;
  } else if(math === "-"){
    return num1 - num2;
  } else if(math === "*"){
    return num1*num2;
  } else if(math === "/"){
    return num1/num2;
  } else if(math === '%'){
    return num1 % num2;
  } else {
    return "You didnt put a math operator as the first parameter";
  }
}

console.log(basicOp("+", 2,2));
console.log(basicOp("-", 2,2));
console.log(basicOp("*", 2,2));
console.log(basicOp("/", 2,2));
console.log(basicOp("%", 3,2));
console.log(basicOp("^", 3,2));
console.log(basicOp("+", "2",2));
