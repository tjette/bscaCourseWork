// console.log("hello world");



function generateDeck(){
  var tempDeck = [];
  for(var i =1;i<=52; i+=1){
    tempDeck.push(i);
  }
  return tempDeck;
}

var deck = generateDeck();


function shuffle(deckIn){
  console.log("I'm suppposed to shuffle.");
  for(var i=0;i<deckIn.length; i+=1){
    var currentIndex = deckIn.indexOf(deckIn[i]);
    var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random() * deckIn.length)]);

    var tempCard = deckIn[currentIndex];
    deckIn[currentIndex] = deckIn[swapIndex];
    deckIn[swapIndex] = tempCard;
  }
return deckIn;
  console.log("Shuffled Deck", deckIn)
  console.log("Shuffled Deck Length", deckIn.length);

}

deck = shuffle(deck);


var checkArray = [];

deck.forEach(function(card,index){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
});

console.log("Check Array Length", checkArray.length);
console.log(deck, checkArray);
console.log
