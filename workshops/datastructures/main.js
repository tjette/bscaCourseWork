// var Pets = function(name) {
//   this.name = name;
// }
//
// Pets.prototype.sayHi = function() {
//   console.log('Hi my name is, ' + this.name)
// }
//
// myPets = new Pets('June')
// console.log(myPets.sayHi())

var Stack = function() {
	this.storage = '';
}
Stack.prototype.push(val){
  this.storage = this.storage.concat('***', val)
}
Stack .prototype.pop= function(){
}
Stack.prototype.size= function(){
}
var myWeeklyMenu = new Stack();
myWeeklyMenu.push('RedBeans')
