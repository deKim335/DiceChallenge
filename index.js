var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
