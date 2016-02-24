function button1(){
  var show = document.getElementById("pro1");
  var i = 0;
  var sum = 0;
  for(i = 0; i < 1000; i++){
    if((i % 3 == 0) || (i % 5 == 0)){
    sum += i ;
    }
       }
  show.innerHTML = sum
    } 

function button2(){
  
  document.getElementById("pro1").innerHTML =" ";
  
}






