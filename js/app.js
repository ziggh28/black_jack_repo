console.log("welcome to the jungle");
/*-------------------------const---------------------*/
// make a constant where Jack , Queen & King hold a value of 11
const Jack = 10
const Queen = 10 
const King = 10
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
// let dealbtn = document.getElementById(".deal") 
let hitBtn = document.getElementById("hit")
let standbtn = document.getElementById("stand") 
let resetbtn = document.getElementById("reset") 
/*--------------------cache elements-----------------*/
/*-------------------add EventListener---------------*/
hitBtn.addEventListener("click", hit);
standbtn.addEventListener("click", stand);
resetbtn.addEventListener("click", reset);
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
    // create a div element with the first value of  the playerhand
    const playerCard1 = document.createElement("div")
    // add a class to the card element
   
    playerCard1.classList.add("card")
    console.log(playerCard1)
    playerCard1.innerText=playerHand[0]
    const playerCard2 = document.createElement("div")
    // add a class to the card element
   
    playerCard2.classList.add("card")
    console.log(playerCard2)
    playerCard2.innerText=playerHand[1]
    // append the element to the playerhand div
    // first step grab element playerhand div
   
    const playerCard3 = document.createElement('div')
    playerCard3.classList.add("card")
    console.log(playerCard3) 
    playerCard3.innertext= playerHand[2]
    
    
    let playHands= document.getElementById("playerHand")
    console.log(playHands)
    // second step append playercards to the playhand div
    playHands.appendChild(playerCard1)
    playHands.appendChild(playerCard2)
     
    
// randomly selects  2 cards from the shuffle function
    dealerHand = [shuffle_Cards(deck_Of_Cards),shuffle_Cards(deck_Of_Cards)];

    // create a div element with the first value of  the playerhand
    const dealerCard1 = document.createElement("div")
    // add a class to the card element
   
    dealerCard1.classList.add("card")
    console.log(dealerCard1)
    dealerCard1.innerText=dealerHand[0]
    const dealerCard2 = document.createElement("div")
    // add a class to the card element
   
    dealerCard2.classList.add("card")
    console.log(dealerCard2)
    dealerCard2.innerText=dealerHand[1]
    // append the element to the playerhand div
    // first step grab element playerhand div
   
    let dealHands= document.getElementById("dealerHand")
   console.log(dealHands)
    // second step append playercards to the playhand div
    dealHands.appendChild(dealerCard1)
    dealHands.appendChild(dealerCard2)
  }
  
  
  
  function playerhandValue(pHand){
    let max = 0;
    for (let i=0 ; i < pHand.length; i++){
      max =  max +pHand[i];
    }
    document.getElementById("pHV").innerText= "player hand Value: "+ max,
    console.log(max)
    return max;
   }
  
   
   function dealerhandValue(dHand){
    let sum = 0;
    for (let i=0 ; i < dHand.length; i++){
      sum =  sum +dHand[i];
    }
    document.getElementById("dhV").innerText= "dealer hand Value: "+ sum,
    console.log(sum)
    return sum;
   }
   
   
   
   startGame()
   console.log(playerHand)
   console.log(dealerhandValue(dealerHand), "dealerHANDER")
   
   console.log(dealerHand)
   
   
   
   
   //player hit function
   function hit(){
     playerHand.push(shuffle_Cards(deck_Of_Cards)),
     alert("PLAYER hand: " + playerhandValue(playerHand));
   }if(playerhandValue(playerHand) == 21 || playerHand < dealerHand) {
     alert("player wins!")
     console.log(playerhandValue(playerHand),"< NEW PLAYER HAND");
     if(playerhandValue(playerHand)>21){
       alert("PLAYER BUST!")
     }
   }

   function stand(){
     while (dealerhandValue(dealerHand) <= 17){
      // deal one card for the dealer
      dealerHand.push(shuffle_Cards(deck_Of_Cards)),
      alert(dealerhandValue(dealerHand), '< NEW DEALER HAND');
    }if(dealerhandValue(dealerHand) == 21 || playerHand > dealerHand ) {
      alert("dealer wins!")
    }if (dealerhandValue(dealerHand) > 21) {
      alert("DEALER BUST! ")
      console.log("DEALER hand: " + dealerhandValue(dealerHand));
    }
  }
  
  
  
  
  
  function reset() {
  window.location.reload()  
 }

//  wincondition last thing
/*---------------------functions---------------------*/
  











