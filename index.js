
   
   cardName.addEventListener("change", mostrar)
   cardNumber.addEventListener("change", mostrar)
   dmInput.addEventListener("change", mostrar)

   // Function to reflect the user inputs in the card
function mostrar(){
    let nameVar= document.getElementById('cardName').value;
    
    document.getElementById('name').innerHTML=nameVar

   let numberVar= document.getElementById('cardNumber').value;
   
   document.getElementById('number').innerHTML=numberVar

   let ddmmVar= document.getElementById('dmInput').value;

   document.getElementById('ddmm').innerHTML=ddmmVar

   let cvvVar= document.getElementById('cvvInput').value;

   document.getElementById('cvv').innerHTML=cvvVar

   }

// function to show a confirmation message
function enviado (){
 document.getElementById('msg').style.display= 'block';

}
 

// Function to validate form inputs
function validateForm() {
   // Get the values from the input fields
   let cardName = document.getElementById("cardName").value;
   let cardNumber = document.getElementById("cardNumber").value;
   let expDate = document.getElementById("dmInput").value;
   let cvv = document.getElementById("cvvInput").value;
  
   // Check if the card holder name is not empty
   if (cardName == "") {
     alert("Please enter your name");
     return false;
   }
 
   // Check if the card number is not empty and contains exactly 16 digits
   if (cardNumber == "" || cardNumber.length != 16) {
     alert("Please enter a valid card number");
     return false;
   }
 
   // Check if the exp date is not empty and contains exactly 5 characters in the format "dd/mm"
   if (expDate == "" || expDate.length != 5 || expDate.indexOf("/") == -1) {
     alert("Please enter a valid expiration date in the format 'dd/mm'");
     return false;
   }
 
   // Check if the CVV is not empty and contains exactly 3 digits
   if (cvv == "" || cvv.length != 3) {
     alert("Please enter a valid CVV code");
     return false;
   }
   
 
   // If all the validation checks pass, return true to submit the form
   return enviado() ;
   
 }
 
