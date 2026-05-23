// FORM

const form =
  document.getElementById('Form');

// INPUTS

const cardNameInput =
  document.getElementById('cardName');

const cardNumberInput =
  document.getElementById('cardNumber');

const dateInput =
  document.getElementById('dmInput');

const cvvInput =
  document.getElementById('cvvInput');

// CARD ELEMENTS

const cardNameText =
  document.getElementById('name');

const cardNumberText =
  document.getElementById('number');

const cardDateText =
  document.getElementById('ddmm');

const cardCVVText =
  document.getElementById('cvv');

// SUCCESS MESSAGE

const successMessage =
  document.getElementById('msg');

// DEFAULT VALUES

const defaults = {
  name: 'Jane Appleseed',
  number: '0000 0000 0000 0000',
  date: '00/00',
  cvv: '000'
};

// UPDATE NAME

cardNameInput.addEventListener(
  'input',
  () => {

    cardNameText.textContent =
      cardNameInput.value ||
      defaults.name;
  }
);

// UPDATE CARD NUMBER

cardNumberInput.addEventListener(
  'input',
  () => {

    let value =
      cardNumberInput.value
        .replace(/\D/g, '')
        .substring(0, 16);

    value =
      value.replace(/(.{4})/g, '$1 ')
        .trim();

    cardNumberInput.value = value;

    cardNumberText.textContent =
      value || defaults.number;
  }
);

// UPDATE DATE

dateInput.addEventListener(
  'input',
  () => {

    let value =
      dateInput.value
        .replace(/\D/g, '')
        .substring(0, 4);

    if (value.length >= 3) {

      value =
        value.substring(0, 2) +
        '/' +
        value.substring(2);
    }

    dateInput.value = value;

    cardDateText.textContent =
      value || defaults.date;
  }
);

// UPDATE CVV

cvvInput.addEventListener(
  'input',
  () => {

    let value =
      cvvInput.value
        .replace(/\D/g, '')
        .substring(0, 3);

    cvvInput.value = value;

    cardCVVText.textContent =
      value || defaults.cvv;
  }
);

// VALIDATION

function validateForm() {

  const name =
    cardNameInput.value.trim();

  const number =
    cardNumberInput.value
      .replace(/\s/g, '');

  const date =
    dateInput.value.trim();

  const cvv =
    cvvInput.value.trim();

  if (!name) {
    return 'Please enter card holder name';
  }

  if (!/^\d{16}$/.test(number)) {
    return 'Card number must contain 16 digits';
  }

  if (!/^\d{2}\/\d{2}$/.test(date)) {
    return 'Expiration date must be MM/YY';
  }

  if (!/^\d{3}$/.test(cvv)) {
    return 'CVV must contain 3 digits';
  }

  return null;
}

// SUBMIT

form.addEventListener(
  'submit',
  e => {

    e.preventDefault();

    const error =
      validateForm();

    if (error) {

      alert(error);

      return;
    }

    successMessage.style.display =
      'block';

    setTimeout(() => {

      successMessage.style.display =
        'none';

    }, 3000);
  }
);