// class Stack {
//   constructor(limit){
//     this.data = {}
//     this.limit = limit
//     this.size = 0
//   }
//   push(val){
//     if (this.size < this.limit) {
//       this.data[this.size] = val
//       this.size++
//       return this
//     }
//     return 'ERR: Exceeded stack limit'
//   }
// }
//
// const stack = new Stack(5);
// console.log(stack.data)
//
// for(let i=0; i<6; i++) {
//   console.log(stack.push(i))
// }

class Stack {
  constructor(limit){
    this.data = []
    this.limit = limit
    this.size = 0
  }
  push(val){
    if (this.data.length < this.limit) {
      this.data.push(val)
      this.size +=1
      return this
    }
    return 'ERR: Exceeded stack limit'
  }
  pop(){
    if (this.size) {
    const item = this.data.pop()
    this.size -=1
    return item
  }
  return "ERROR"
}

  popSearch(searchItem){
    const tempData = [].concat(this.data)
    console.log(tempData)
    for(var i=this.size -1; i >= 0; i--) {
      const dataItem = tempData.pop()
      if (dataItem === searchItem) {
        return dataItem
      }
    }
    return 'Error'
  }
}

const stack = new Stack(5);
// console.log(stack.data)

for(let i=0; i<6; i++) {
  console.log(stack.push(i))
}
for(let i=0; i<6; i++) {
  console.log(stack.pop())
}
console.log('PopSearch', stack.popSearch(2))
console.log('I didnt find', stack.popSearch(2))


// class Stack {
//   constructor(limit){
//     this.data = []
//     this.limit = limit
//     this.size = 0
//   }
//   push(val){
//     if (this.data.length < this.limit) {
//       this.data.push(val)
//       this.size +=1
//       return this
//     }
//     return 'ERR: Exceeded stack limit'
//   }
//   pop(){
//     if (this.size) {
//     const item = this.data.pop()
//     this.size -=1
//     return item
//   }
//   return "ERROR"
// }
//
//   popSearch(searchItem){
//     const tempData = [].concat(this.data)
//     return tempData.find((item) => searchItem === item) || 'ERROR'
//   }
// }
//
// const stack = new Stack(5);
// // console.log(stack.data)
//
// for(let i=0; i<6; i++) {
//   console.log(stack.push(i))
// }
//
// console.log('PopSearch', stack.popSearch(2))
// console.log('I didnt find', stack.popSearch(2))
