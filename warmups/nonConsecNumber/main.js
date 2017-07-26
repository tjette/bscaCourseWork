let numbers = [1,2,3,4,5,7,8,9,10,11,14];

function nonConSec() {
  for(i=1;i<numbers.length; i++){
    if(numbers[i] - numbers[i-1] !== 1){
      console.log(numbers[i-1], numbers[i]);
      console.log("At index:", i -1, i)
      break;
    }
  }
}

console.log(nonConSec());
