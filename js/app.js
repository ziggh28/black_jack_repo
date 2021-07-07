console.log("welcome to the jungle");
/*-------------------------const---------------------*/



// make a conststant where Jack , Queen & King hold a value of 11
const Jack = Queen = King = 10;
// make constant for Ace where the Ace card hold a value of 1 or 11
const Ace = 11;
// make constant that hold value of the every cards
const deck_Of_Cards = [2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace,2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace,];

console.log(deck_Of_Cards)

/*-------------------------const--------------------*/
/*-----------------------variables------------------*/
// make an array empty  holding 52 card ranging from 2 -11

let playerHand;

let dealerHand; 
 
// let deck_Of_Cards = [];
//  loop all the suits in the const suits  
    // for(let j=0; j <values.length; j++){
    //     let cards = {Value: values[j]};
    //     deck_Of_Cards.push(cards)
    // }


/*-----------------------variables------------------*/
/*---------------------cache elements---------------*/



/*--------------------cache elements-----------------*/
/*-------------------add EventListener---------------*/


/*-------------------add EventListener---------------*/
/*---------------------functions---------------------*/
//shuffle function that randomly selects a card from the deck
function shuffle_Cards(deck_Of_Cards){
     let random_Card = Math.floor(deck_Of_Cards.length * Math.random());
        return deck_Of_Cards[random_Card];
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
    console.log("new player hand: " + handValue(playerHand));
if(handValue(playerHand)>21){
    console.log("bust!")
}
console.log("new player hand: " + handValue(playerHand));
}









/*---------------------functions---------------------*/
  


