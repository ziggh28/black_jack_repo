//-----------const-----
 
//-----------const-----
//-----------vars-----
let Jack = 10; 
let Queen = 10; 
let King = 10; 
let Ace = 11; 
let cardValue =[2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace,]
let message = ""


//------- player

let playerCards = []

let sum = 0

//------- player

//------- dealer

let player2Cards = []

let sum2 = 0

//------- dealer


//-----------vars-----

//--------cacheElement-----

let messageEl = document.getElementById('message')

//------- player

let playerSumEl = document.getElementById("playersum")

let playerCardsEl = document.getElementById("playercard")
//------- player
//------- player2

let player2SumEl = document.getElementById("player2sum")

let player2CardsEl = document.getElementById("player2card")

//------- player2
//--------cacheElement-----

//---addEventListner----

//---addEventListner----

//--------functions-----
//---drawcard


function drawCard(){
    
    let randomCard = Math.floor(cardValue.length * Math.random());
         
    return randomCard;
}
//---drawcard

//---deal

function deal() {
    startGame = true
   
    let playerFirstCard = drawCard()

    let playerSecondCard = drawCard()
    
     playerCards = [playerFirstCard, playerSecondCard]
    
     sum = playerFirstCard + playerSecondCard 

//------- player2

let player2FirstCard = drawCard()

let player2SecondCard = drawCard()

player2Cards = [player2FirstCard, player2SecondCard]

sum2 =  player2FirstCard + player2SecondCard

//-------player2
    render()
}
//---deal

//---render

function render(){

    //------- player
    playerCardsEl.textContent= "Cards: "
    
    for(let i = 0 ;i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " "
    }
    
    playerSumEl.textContent= `Handvalue: ${sum}`
         if(sum === 21) {
            message = "BLACKJACK!! YOU WON!!  "
            
            
        }else if(sum > 21){
            message = "BUST!"
        }
              
   
//------- player
                        
//------- player2
                        
 player2CardsEl.textContent= "Cards: "
                        
for(let i = 0 ;i < player2Cards.length; i++) {
    player2CardsEl.textContent += player2Cards[i] + " "
 }
 
 player2SumEl.textContent= `Handvalue: ${sum2}`
 if(sum2 === 21){
     message = "BLACKJACK!!! DEALER WON"
     
    }
    messageEl.textContent = message
    
    
//------- player2
}                    
//---render
//---hit

function hit(){
    
    let newCard = drawCard()
    
    sum += newCard
    
    playerCards.push(newCard)
    
    console.log(playerCards)
    
    render()
}
//---hit

//---stand
function hit2(){
    
    let newCard2 = drawCard()
    
    sum2 += newCard2
    
    player2Cards.push(newCard2)                                           
    
    if(sum2 > 21){
        message = "BUST!"
    } 
    
    else if(sum2 > sum) {
     message = "dealer wins"
             }
        else if (sum > sum2 ){
        message = "player wins"
        }
    render()
     
}

//---stand

//--------functions-----
