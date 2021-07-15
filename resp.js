var randomNumber1= (Math.floor(Math.random()*6))+1;
var randomNumber2= (Math.floor(Math.random()*6))+1;

var image1="images/dice"+randomNumber1+".png";
var image2="images/dice"+randomNumber2+".png";
document.getElementsByClassName("dice")[0].querySelector("img").src=image1;
document.getElementsByClassName("dice")[1].querySelector("img").src=image2;

var h1=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    h1.innerHTML="Player 1 Won🥳";
}else if(randomNumber2>randomNumber1){
    h1.innerHTML="Player 2 Won😎";
}else{
    h1.innerHTML="It's a Tie😐";
}