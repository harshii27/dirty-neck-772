document.querySelector(".submit-btn").addEventListener("click",function(){
  location.href = "http://127.0.0.1:5502/thankyou.html"
})
var form = document.getElementById("payment-form")
var cardNumber = document.getElementById("card-number");

var cvv = document.getElementById("cvv");
var billingZip = document.getElementById("billing-zip");
var year = document.getElementById("Year")
var namecard = document.getElementById("Name")
var btn = document.getElementsByClassName("submit-btn")


form.addEventListener("submit", function (event) {
  // Prevent the form from being submitted
  event.preventDefault();
  // Check that all fields are filled out
  if (!cardNumber.value || !cvv.value || !namecard) {
    alert("Please fill out all fields.");
    return;
  }

  // Check that the card number is valid
  if (cardNumber.value.length) {
    isValidCardNumber(cardNumber.value.length)
  }else{
    alert("Invalid card number.");
    return
  }

  // Check that the CVV is valid
  if (!isValidCVV(cvv.value)) {
    alert("Invalid CVV.");
    return;
  }

  


});

function isValidCardNumber(cardNumber) {
     

  // Check that the card number is at least 12 digits long
  if (cardNumber <= 16) {
    return false;
  } else {
    var sum = 0;
    var isEven = false;
    for (var i = cardNumber.value.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i));
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
  }


  return sum % 10 === 0;
}





function isValidCVV(cvv) {
  // Check that the CVV is 3 or 4 digits long
  if (cvv.length < 3 || cvv.length > 4) {
    return false;
  }

  // Check that the CVV is a number
  if (isNaN(cvv)) {
    return false;
  }

  return true;
}






