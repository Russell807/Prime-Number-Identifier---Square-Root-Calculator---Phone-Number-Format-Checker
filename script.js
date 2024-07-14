function checkPrimeNumber(inputNumber) {
    if (inputNumber === undefined) {
        inputNumber = document.getElementById("prime-input").value;
    }
    if (inputNumber === '' || isNaN(inputNumber)) {
        alert("Please enter a valid number.");
        return;
    }
    var number = parseInt(inputNumber);
    
    if (number < 2) {
        alert("Prime numbers are greater than 1. Please enter a number greater than 1.");
        return;
    }
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        alert(number + " is a prime number.");
    } else {
        alert(number + " is not a prime number.");
    }
}
function computeSqrt(inputNumber) {
    if (inputNumber === undefined) {
        inputNumber = document.getElementById("sqrt-input").value;
    }    
    if (inputNumber === '' || isNaN(inputNumber)) {
        document.getElementById("sqrt-result").textContent = "Please enter a valid number.";
        return;
    }
    var number = parseFloat(inputNumber);
    
    if (number < 0) {
        document.getElementById("sqrt-result").textContent = "Please enter a non-negative number.";
        return;
    }
    var sqrt = Math.sqrt(number);
 
    document.getElementById("sqrt-result").textContent = "The square root of " + number + " is " + sqrt.toFixed(4);
}


function checkNumberFormat(inputNumber) {
   
    if (inputNumber === undefined) {
        inputNumber = document.getElementById("phone-input").value.trim();
    }
    if (inputNumber === '') {
        alert("Please enter a phone number.");
        return;
    }

    if (inputNumber.startsWith('63') && inputNumber.length === 12) {
        alert(inputNumber + " is a valid Philippines phone number format.");
    }
    
    else if (inputNumber.startsWith('65') && inputNumber.length === 10) {
        alert(inputNumber + " is a valid Singapore phone number format.");
    }
  
    else {
        alert(inputNumber + " is not a valid phone number format for Philippines (starting with 63) or Singapore (starting with 65).");
    }
}

