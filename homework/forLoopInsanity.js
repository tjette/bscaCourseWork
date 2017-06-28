// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)

// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter
var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];

// function counter(){
// 	for(var i =0; i<12; i++){
// 		console.log(i);
//
// 	}
// }
// console.log(counter());


// function findA(letter, myArr){
// 	for(var i =0; i<myArr.length; i++){
// var firstLetter = myArr[i][0];
// 			if(firstLetter=== letter){
// 						console.log(myArr[i]);
// 			}
// 	}
// }
// findA("A", names);

// challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter
var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]

// function greaterThanTen(num){
// 	for(var i=0; i<numbers.length; i++){
// 		if(numbers[i] > num){
// 			console.log(numbers[i]);
// 		}
// 	}
// }
//
// greaterThanTen(84);

// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50
// bonus: Only print the odd numbers that meet these conditions
// function greaterThanSome(){
// 	for(var i=0; i<numbers.length; i++){
// 		if((numbers[i] > 10) && (numbers[i]<50)){
// 			console.log(numbers[i]);
// 		}
// 	}
// }
// greaterThanSome();

// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter

// 	if(typeof value === "number"){
// 	numbers.push(randomItems[i]);
// } if(typeof value === "string"){
// 	strings.push(randomItems[i]);
// }
var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];

function printNumbers(arr, type){
// var numbers = [];
// var strings = [];
if(type === "string"){
	for(var i=0; i<arr.length; i++){
		if(typeof arr[i] === 'string'){
				console.log(arr[i]);
		}
	}

} else if(type === 'number'){
	for(var i=0; i<arr.length; i++){
		if(typeof arr[i] === 'number'){
			console.log(arr[i]);
		}
	}

}

 }
printNumbers(randomItems, 'number');
printNumbers(randomItems, 'string');
// challenge Five
// loop through the array of customer objects, and print ONLY their names
// bonus: Print only customer names that begin with the letter 'A'
var customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];

// function loopCustomers(){
// 	for(var i=0; i<customers.length; i++){
// 		console.log(customers[i].name);
// 	}
// }
//
// loopCustomers();
//
// function loopCustomersWithLetterA(letter){
// 	for(var i=0; i<customers.length; i++){
// 		if(customers[i].name[0] === letter)
// 		console.log(customers[i].name);
// 	}
// }
// loopCustomersWithLetterA("A")
// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'
// bonus: Return a completely new array that meets these conditions.

// function loopCustomersGoldPaid(){
// 	var GoldPaid = [];
// 	for(var i=0; i<customers.length; i++){
// 		if(customers[i].tier === 'gold' && customers[i].paid === true){
// 		GoldPaid.push(customers[i]);
//
// 	}
// 	}
// 	console.log(GoldPaid);
// }
//
// loopCustomersGoldPaid();
