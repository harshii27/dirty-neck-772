 
   var form = document.getElementById("payment-form")
  var cardNumber = document.getElementById("card-number");
  var expirationMonth = document.getElementById("expiration-month");
  var cvv = document.getElementById("cvv");
  var billingZip = document.getElementById("billing-zip");
  var year= document.getElementById("Year")
  var namecard=document.getElementById("Name")
  var btn=document.getElementsByClassName("submit-btn")
  form.addEventListener("submit", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Check that all fields are filled out
    if (!cardNumber.value || !expirationMonth.value || !cvv.value ||!namecard||!year) {
      alert("Please fill out all fields.");
      return;
    }

    // Check that the card number is valid
    if (!isValidCardNumber(cardNumber.value)) {
      alert("Invalid card number.");
      return;
    }

    // Check that the expiration date is valid
    if (!isValidExpirationDate(expirationDate.value)) {
      alert("Invalid expiration date.");
      return;
    }

    // Check that the CVV is valid
    if (!isValidCVV(cvv.value)) {
      alert("Invalid CVV.");
      return;
    }

    // Check that the billing ZIP is valid
    if (!isValidBillingZip(billingZip.value)) {
      alert("Invalid billing ZIP.");
      return;
    }

    
  });

  function isValidCardNumber(cardNumber) {
    
  
    // Check that the card number is at least 12 digits long
    if (cardNumber.length < 12) {
      return false;
    }
    var sum = 0;
    var isEven = false;
    for (var i = cardNumber.length - 1; i >= 0; i--) {
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
  
    return sum % 10 === 0;
  }
  

  function isValidExpirationDate(expirationDate) {
    var today = new Date();
    var enteredDate = new Date(expirationDate);
    enteredDate.setMonth(enteredDate.getMonth()+1);
    if (enteredDate < today) {
        return false;
    }
    return true;
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


  

  

