class Queue {
  constructor(limit) {
    this.limit = limit
    this.data = []
    this.size = 0
  }
  push(val){
    if (this.size < this.limit) {
      this.data.push(val)
      this.size +=1
      return this
    }
    return 'Err: Exceeded allocated queue limit.'
  }
  pop(){
    let val = this.data.splice(0,1)
    console.log(val)
    this.size -=1
    return val[0]
  }
}
const queue = new Queue(5)
for(let i=0; i<6; i+=1) {
  queue.push(i)
}

console.log(queue)

console.log(queue.pop())

console.log(queue)
