
   
   cardName.addEventListener("change", mostrar)
   cardNumber.addEventListener("change", mostrar)
   dmInput.addEventListener("change", mostrar)

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

function enviado (){
 document.getElementById('msg').style.display= 'block';

}
  