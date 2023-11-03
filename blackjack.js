//creating two variables,firstcard and secondcard
//set their values to random number 2-11
//creating a variable, sum and set it to the sum of the two cards
//three scenarios  <21 good , 21 hurray , >21 cry

//let firstcard = 10 instead of 10 using getrandomcard() function
//let firstcard = getRandomcard()  //first and secondcard needs to be assigned in startgame function

//let secondcard = 4
//let secondcard = getRandomcard()
//let cards =[firstcard, secondcard] // array- ordered list of items.
//let sum = firstcard + secondcard 
let cards =[]
let sum = 0
let hasblackjack = false
let isAlive = false //true
let message = ""

//console.log(sum);

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")   //class represent .
let  cardsEl = document.getElementById("cards-el")

console.log(cards); //after rendering function startGame()

//creating a function getRandomcard() that always retuns the number 5
//making this function return a random number between 1 and 13
function getRandomcard(){
    //for ace 1  -> return 11
    //for 11,12,13 -> return 10
    //return Math.floor(Math.random()*13) + 1  //0.000 - 12.999  floor removes 0-12 -> 0-13 so adding + 1
    let randomNumber = Math.floor(Math.random()*13) + 1 
    if (randomNumber> 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }

}


//creating a new function called startgame()
function startGame(){
    isAlive = true
    //generating two random numbers here 
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    cards =[firstcard,secondcard]
    sum = firstcard + secondcard
    //reassigning the cards and sum variables so that game can start
    renderGame()
}


function renderGame(){   //startGame
    //renedering al cards we have
    //sumEl.textContent = "Sum:" + sum
    //rendering out firstcard and secondcard
    //cardsEl.textContent ="Cards :" + firstcard + " " + secondcard
    //using array instead of string
    cardsEl.textContent = "Cards:" //+ cards[0] + " " + cards[1] //creating a loop insead of just 2
    
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
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
    //let card = 10
    let card = getRandomcard()
    sum += card 
    cards.push(card)
    //console.log(cards);
    renderGame()
} 



