//creating two variables,firstcard and secondcard
//set their values to random number 2-11
//creating a variable, sum and set it to the sum of the two cards
//three scenarios  <21 good , 21 hurray , >21 cry

let firstcard = 10
let secondcard = 4
let cards =[firstcard, secondcard] // array- ordered list of items.
let sum = firstcard + secondcard 
let hasblackjack = false
let isAlive = true
let message = ""

//console.log(sum);

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")   //class represent .
let  cardsEl = document.getElementById("cards-el")




//creating a new function called startgame()
function startGame(){
    renderGame()
}


function renderGame(){   //startGame
    //renedering al cards we have
    sumEl.textContent = "Sum:" + sum
    //rendering out firstcard and secondcard
    //cardsEl.textContent ="Cards :" + firstcard + " " + secondcard
    //using array instead of string
    cardsEl.textContent = "Cards:" + cards[0] + " " + cards[1]
    if (sum <= 20){ 
        message = "Do you want to draw new card 🤔???"
    } else if (sum === 21){
        message ="hurray! you got Blackjack!🤩"
        hasblackjack = true
    } else{
        message = "you out!😭"
        isAlive = false
    }
    
    
    //LOGS OUT 
    //console.log(message);

    messageEl.textContent = message

}
function newcard(){
    let card = 10
    sum += card 
    cards.push(card)
    console.log(cards);
    renderGame()
} 



