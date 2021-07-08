console.log("welcome to the jungle");
/*-------------------------const---------------------*/



// make a conststant where Jack , Queen & King hold a value of 11

const Jack = Queen = King = 10;
// make constant for Ace where the Ace card hold a value of 1 or 11
const A = 11;

/*-------------------------const--------------------*/
/*-----------------------variables------------------*/
// make an array empty  holding 52 card ranging from 2 -11

let playerHand= [];

let dealerHand= [];

let deck_Of_Cards = []
// let deck_Of_Cards = [];
//  loop all the suits in the const suits  
    // for(let j=0; j <values.length; j++){
    //     let cards = {Value: values[j]};
    //     deck_Of_Cards.push(cards)
    // }


/*-----------------------variables------------------*/
/*---------------------cache elements---------------*/
let deck = document.getElementById('deck')

/*--------------------cache elements-----------------*/
/*-------------------add EventListener---------------*/
document.getElementById('stand').addEventListener('click', handleClick);
document.getElementById('hit').addEventListener('click', handleClick);
document.getElementById('deal').addEventListener('click', handleClick);
/*-------------------add EventListener---------------*/
/*---------------------functions---------------------*/

// Initialize deck 1 with array of 52 cards 
function init() {
  deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
// Function to handle a button click:
function handleClick(){
  // Error handling
  if (deck_Of_Cards.length > 0){
    let random_card = Math.floor(Math.random() * deck_Of_Cards.length)
    
    cardPicked = deck1.splice(random_card, 1)
    // Add card picked to deck 2
    playerHand.push(cardPicked[0])
    dealerHand.push(cardPicked[0])
    // Pass card picked to render function to display
    render(cardPicked)
  }
}
// Function to render deck state
function render(cardPicked){
  // Remove outline class when first card is picked
}
// console.log(shuffle_Cards(deck_Of_Cards));

function startGame(){
// randomly selects  2 cards from the shuffle function
    playerHand = [shuffle_Cards(deck_Of_Cards),shuffle_Cards(deck_Of_Cards)];
// randomly selects  2 cards from the shuffle function
    dealerHand = [shuffle_Cards(deck_Of_Cards),shuffle_Cards(deck_Of_Cards)];
}
function handValue(hand){
let sum = 0;
for(let i=0; i < hand.length; i++)
sum =  sum +hand[i];
{
    return sum;
}
}

startGame()
console.log(playerHand)
console.log(handValue(playerHand))
console.log(dealerHand)

function Hit(){
    playerHand.push(shuffle_Cards(deck_Of_Cards)),
    alert("new player hand: " + handValue(playerHand));
if(handValue(playerHand)>21){
    console.log("bust!")
}
console.log("new player hand: " + handValue(playerHand));
}
// // document.querySelector("#Hit").textContent = handValue()
// console.log("new playerHand:"+ handValue(playerHand))
// function stand(){
// if(handValue(playerHand) < dealerHand){

// }
// }
// // deal function 
// function deal(){
// }
/*---------------------functions---------------------*/
  


