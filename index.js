var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

var player1 = document.querySelector("h1");
var player2 = document.querySelector("h1");
if (randomNumber1 >randomNumber2){
  player1.innerHTML = "🚩Player1 wins";
}
else if(randomNumber1 < randomNumber2){
  player2.innerHTML = "Player2 wins 🚩"
}
else if(randomNumber1 === randomNumber2){
   document.querySelector("h1").innerHTML = "😅 DRAW";
}
