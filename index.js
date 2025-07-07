
var ramdomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage1="dice"+ramdomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);


var ramdomNumber2=Math.floor(Math.random()*6+1);
var randomImageSource1 = "dice" + ramdomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if (ramdomNumber1 > ramdomNumber2) {
    document.querySelector('h1').innerHTML = "player 1 wins! ";

} else if (ramdomNumber2 > ramdomNumber1) {
    document.querySelector('h1').innerHTML = "player 2 wins!";

} else { document.querySelector("h1").innerHTML = "DRAW!"; }



