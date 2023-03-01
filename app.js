// const gameYouWantToPlay = prompt("Which do you want to play")
// const enteredGame = gameYouWantToPlay

// const gameDetails = {
//     gameName : "Valorant",
//     introducedIn: 2020,
//     gameType: "Fps Game"    
// }

// console.log(gameDetails)

// if (gameYouWantToPlay === gameDetails.gameName){
//     alert("Yes you can play Valorant")
// }
// else{
//     alert(enteredGame + "Not available")
// }

// var gameYouWantToBuy = prompt("Which game u want to buy?")
// if(gamesInStock === gamesInStock.includes(gameYouWantToBuy)){
    // else{
    //     console.log("Game is not available")
    // }

// var gamesInStock = ["RDR2", "GOD OF WAR", "ASSASSIN CREEDS", "DYING LIGHT", "SHADOW OF TOMB RIDER"]
//     for(let a = 0; a <= gamesInStock.length - 1; a++){
//     console.log(`Yes ${gamesInStock[a]} is available`)
//     }    
 

// for(let a = 0; a < 10; a++){
//     console.log(a)
// }

var gamesInStock = ["RDR2", "GOD OF WAR", "ASSASSIN CREEDS", "DYING LIGHT", "SHADOW OF TOMB RIDER"]
var gameToPurchase = prompt("Which game do you want to buy")

var signal;
var indexNum; 

for(let a = 0; a < 10; a++){
    if(gamesInStock[a] === gameToPurchase){
        signal = true
        indexNum = a
    }
}

if(signal){
    alert(`Yes ${gameToPurchase} is available at ${indexNum}`)
}
else{
    alert("Game not found")
}