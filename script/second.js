function myFibonacci(){
var show = document.getElementById("pro2");
var numberTwo = 2;
var sum = 0;
  for( var numberOne = 2; numberOne < 4000000; numberOne++){
    if(numberOne % 2 === 0){
      sum += numberOne;
    }
    var sumNumbers = numberOne + numberTwo;
    numberOne = numberTwo;
    numberTwo = sumNumbers;
  } show.innerHTML = sum;
}

function myDelete(){
 document.getElementById("pro2").innerHTML =" ";
  
}
