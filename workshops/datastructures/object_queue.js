class ObjectQueue {
  constructor(limit) {
    this.limit = limit
    this.data = {}
    this.size = 0
  }


push(item){
  if (this.size < this.limit) {
    this.data[this.size] = item
    this.size++
    return this
  }
  return 'ERROR'
}

pop(){
  if(this.size) {
    const pos = String(this.limit - this.size)
    const returnItem = this.data[pos]
    delete this.data[pos]
    this.size -= 1
    return returnItem
  }
}
popSearch(searchItem){
  for(const key in this.data) {
      if(searchItem === this.data[key]) {
        const returnItem = this.data[key]
        delete this.data[key]
        return returnItem
      }
      delete this.data[key]
  }
  return 'ERROR'
}
}
const objQueue = new ObjectQueue(5)
console.log(objQueue.push('Pumpkin'))
console.log(objQueue.push('Ghost'))
console.log(objQueue.push('Candy Corn'))
console.log(objQueue.push('Vampire'))
console.log(objQueue.push('Zombie'))
console.log(objQueue)
console.log(objQueue.popSearch('Ghost'))
console.log(objQueue)
