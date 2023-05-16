var randomNumber1 = Math.floor(Math.random()*6 )+1;
var randomDiceImage ="dice" +randomNumber1+".jpg";
 var randomImageSource ="images/"+ randomDiceImage;
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

 var randomnumber2 =Math.floor(Math.random()*6)+1;
 var randomDiceImage1 ="dice" + randomnumber2 +".jpg";
 var randomImageSource1 ="images/" +randomDiceImage1;
 document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);


 if(randomNumber1 >randomnumber2){
    document.querySelector("h1").innerHTML ="play 1 Wins!";
 }
 else if(randomnumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="play 2 Wins!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!";
 }