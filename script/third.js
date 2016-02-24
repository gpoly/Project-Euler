function primeNumbers(){
  var show = document.getElementById("pro3");
      var numbertoCheck = 600851475143;
      var div = 2;
      var large = 1;
      while(numbertoCheck > 1){
        if(numbertoCheck % div == 0){
          numbertoCheck = numbertoCheck/div;
          large = div;
          div = 2;
        }else{
          div += 1;
        }
      }
      show.innerHTML = large;
    }


    function myDeleteTwo(){
 document.getElementById("pro3").innerHTML =" ";
  
}