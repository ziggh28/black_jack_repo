console.log("welcome to the jungle");
/*-------------------------const---------------------*/
// make a variable where Jack , Queen & King 
const Jack = Queen = King = 10;
// make constant for Ace where the Ace card hold a value of 1 or 11
const Ace = 11;
console.log(Ace)

const suits =["Spade","Diamonds","Clubs","Hearts",];
const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Jack",
    "Queen",
    "king",
    "Ace",
];

/*-------------------------const--------------------*/
/*-----------------------variables------------------*/
// variable holding 52 card ranging from 2 -11
let deck_Of_Cards =
 [];
console.log(deck_Of_Cards)
for(let i= 0; i < suits.length; i++){
    for(let j=0; j <values.length; j++)
    {
        let cards = {Value: values[j], Suit: suits[i]};
             deck_Of_Cards.push(cards)
    }
}

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
console.log(shuffle_Cards(deck_Of_Cards));


/*---------------------functions---------------------*/
  


