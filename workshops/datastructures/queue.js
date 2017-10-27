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
    if (this.size) {
      let item = this.data.splice(0,1)
      this.size -=1
      return item[0]
    }
    return "ERROR"
  }
}
const queue = new Queue(5)
for(let i=0; i<6; i+=1) {
  queue.push(i)
}

for(let i=0; i<6; i++) {
  console.log(queue.pop())
}
