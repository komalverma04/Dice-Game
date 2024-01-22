var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "./images/dice" + random1 + ".png";
var randomimage2 = "./images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].src = randomimage1;
document.querySelectorAll("img")[1].src = randomimage2;
if(random1 > random2){
    document.querySelector(".Result").innerHTML = "Player 1  WON!!";
}else if(random1 < random2){
    document.querySelector(".Result").innerHTML = "Player 2  WON!!";
}else{
    document.querySelector(".Result").innerHTML = "DRAW!!";
}
