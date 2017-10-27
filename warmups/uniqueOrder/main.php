

function uniqueOrder(value) {
  const tempArray = [];
  for(i=1; i< value.length; i++) {
    if (value[i -1] !== value[i]) {
      tempArray.push(value[i -1])
    }
  }
  return tempArray
}

console.log(uniqueOrder('AAAABBBCCDAABBB'));
