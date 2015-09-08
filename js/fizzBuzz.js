
	$(document).ready(function(){


  $("#num_btn").on("click", function() {


  // I used fixed maximum number so not too allow user to get into a memory failure
    var MAX_NUM_N = 150;
   // find the output field and make sure it exists
   var myOutput = $('#fizzBuzzResults');
   myOutput.val=""; 

    // extract number
    var numberN = $('#numberN').val();
    var numList = "";


    // check if it does not exceed the limit
    if (numberN >=1 && numberN<=MAX_NUM_N) {
        
      // loop through the N numbers, evaluating divisibility on 3 and 5:
        for (var i=0; i<=numberN; i++) {

          if ((i%3)==0  &&  (i%5)==0 ) {
              numList  = numList  + " FizzBuzz *** ";
          }
          else if ((i%3)==0) {
              numList = numList  + " Fizz  *** ";
          }
          else if ((i%5)==0) {
              numList = numList  + " Buzz  *** ";
          }
          else {
               numList = numList  + " " +i+ "  *** ";
          }
         }
 
      if (myOutput.length>0){       
          myOutput.append("<p class='result'>"+numList+"</p>");
        }

       else {
        alert("No output field foud!");
       } 
     }

    else {
        alert ("The number is out of limit! Try again!");
     }

});

});

