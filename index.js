// Cache the DOM elements
const cardNameEl = document.getElementById('cardName');
const cardNumberEl = document.getElementById('cardNumber');
const dmInputEl = document.getElementById('dmInput');
const cvvInputEl = document.getElementById('cvvInput');
const nameDisplay = document.getElementById('name');
const numberDisplay = document.getElementById('number');
const ddmmDisplay = document.getElementById('ddmm');
const cvvDisplay = document.getElementById('cvv');

// Add event listeners for the inputs
[cardNameEl, cardNumberEl, dmInputEl, cvvInputEl].forEach(el => {
    el.addEventListener("input", mostrar);
});

// Function to reflect user inputs in the card
function mostrar() {
    nameDisplay.innerHTML = cardNameEl.value;
    numberDisplay.innerHTML = cardNumberEl.value;
    ddmmDisplay.innerHTML = dmInputEl.value;
    cvvDisplay.innerHTML = cvvInputEl.value;
}

// Function to show a confirmation message
function enviado() {
    document.getElementById('msg').style.display = 'block';
}

// Function to validate form inputs
function validateForm() {
    // Get the values from the input fields
    const cardName = cardNameEl.value;
    const cardNumber = cardNumberEl.value;
    const expDate = dmInputEl.value;
    const cvv = cvvInputEl.value;

    // Validation checks
    if (!cardName) {
        alert("Please enter your name");
        return false;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number");
        return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expDate)) {
        alert("Please enter a valid expiration date in the format 'dd/mm'");
        return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid 3-digit CVV code");
        return false;
    }

    // If all validations pass, show the confirmation message
    enviado();
    return true;
}
