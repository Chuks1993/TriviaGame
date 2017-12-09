$(document).ready(function(){

var questions = {
	hey: ["hey", "you"]
}


//timer
var myVar;
var time = 20;

$('#start').click(function(){
	myFunction();
	$(this).animate({width: "100%",top: "50%"});
	$(this).text("Question"); //chsnge into first queestions! 
	$('header').animate({top: "0%"})

})

function myFunction() {
    myVar = setInterval(countDown, 1000);
    
}

function countDown() {
  time--;

  console.log(time);
}













































});