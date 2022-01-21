const form = (function form() {
  const formContainer = document.querySelector('form');
  const email = document.getElementById('email-input');
  const country = document.getElementById('country-input');
  const zipCode = document.getElementById('code-input');
  const password = document.getElementById('password-input');
  const passwordConfirm = document.getElementById('password-confirm-input');

  return {
    formContainer, email, country, zipCode, password, passwordConfirm,
  };
}());

const formError = (function formError() {
  const countryError = document.querySelector('.country-error');
  const zipCodeError = document.querySelector('.code-error');
  const passwordError = document.querySelector('.password-error');
  const passwordConfirmError = document.querySelector('.password-confirm-error');
  const emailError = document.querySelector('.email-error');

  return {
    countryError, zipCodeError, passwordError, passwordConfirmError, emailError,
  };
}());

const displayError = (function displayError() {
  const email = (element) => {
    if (element.validity.valueMissing) {
      formError.emailError.textContent = 'You need to enter and e-mail address';
    } else if (element.validity.typeMismatch) {
      formError.emailError.textContent = 'Entered value needs to be an email address';
    }
    formError.emailError.className = 'error active';
  };

  const country = (element) => {
    if (element.validity.valueMissing) {
      formError.countryError.textContent = 'You need to enter a country';
    } else if (element.validity.tooShort) {
      formError.countryError.textContent = `Country should be at least ${element.minLength} characters`;
    } else if (element.validity.tooLong) {
      formError.countryError.textContent = `Country should be no longer than ${element.maxLength} characters`;
    }
    formError.countryError.className = 'error active';
  };

  const zipCode = (element) => {
    if (element.validity.valueMissing) {
      formError.zipCodeError.textContent = 'You need to enter a Zipcode';
    } else if (element.validity.tooLong) {
      formError.zipCodeError.textContent = `Zipcode should be no longer than ${element.maxLength} characters`;
    } else if (element.validity.patternMismatch) {
      formError.zipCodeError.textContent = `${element.value} is not a valid Zipcode`;
    }
    if (element.validity.tooShort) {
      formError.zipCodeError.textContent = `Zipcode should be at least ${element.minLength} characters`;
    }
    formError.zipCodeError.className = 'error active';
  };

  const password = (element) => {
    if (element.validity.valueMissing) {
      formError.passwordError.textContent = 'You need to enter a password';
    } else if (element.validity.tooShort) {
      formError.passwordError.textContent = `Your password should be at least ${element.minLength} characters`;
    } else if (element.validity.tooLong) {
      formError.passwordError.textContent = `You password should be no longer than ${element.maxLength} characters`;
    }

    formError.passwordError.className = 'error active';
  };

  const passwordConfirm = () => {
    formError.passwordConfirmError.textContent = 'Passwords do not match';
    formError.passwordConfirmError.className = 'error active';
  };
  return {
    email, country, zipCode, password, passwordConfirm,
  };
}());

const validateForm = (function validateForm() {
  let emailValid = false;
  let countryValid = false;
  let zipValid = false;
  let passwordValid = false;
  let passwordConfirmValid = false;

  const validateEmail = (element) => {
    if (element.validity.valid) {
      formError.emailError.textContent = '';
      formError.emailError.className = 'error';
      emailValid = true;
    } else {
      emailValid = false;
      displayError.email(element);
    }
  };

  const validateCountry = (element) => {
    if (element.validity.valid) {
      formError.countryError.textContent = '';
      formError.countryError.className = 'error';
      countryValid = true;
    } else {
      countryValid = false;
      displayError.country(element);
    }
  };

  const validateZipcode = (element) => {
    if (element.validity.valid) {
      formError.zipCodeError.textContent = '';
      formError.zipCodeError.className = 'error';
      zipValid = true;
    } else {
      zipValid = false;
      displayError.zipCode(element);
    }
  };

  const validatePassword = (element) => {
    if (element.validity.valid) {
      formError.passwordError.textContent = '';
      formError.passwordError.className = 'error';
      passwordValid = true;
    } else {
      passwordValid = false;
      displayError.password(element);
    }
  };

  const validatePasswordConfirm = (confirm, passwordValue) => {
    if (confirm.value === passwordValue.value) {
      formError.passwordConfirmError.textContent = '';
      formError.passwordConfirmError.className = 'error';
      passwordConfirmValid = true;
    } else {
      passwordConfirmValid = false;
      displayError.passwordConfirm();
    }
  };

  return {
    validateEmail,
    validateCountry,
    validateZipcode,
    validatePassword,
    validatePasswordConfirm,
    emailValid,
    countryValid,
    zipValid,
    passwordValid,
    passwordConfirmValid,
  };
}());

(function formListeners() {
  form.email.addEventListener('input', () => {
    validateForm.validateEmail(form.email);
  });

  form.country.addEventListener('input', () => {
    validateForm.validateCountry(form.country);
  });

  form.zipCode.addEventListener('input', () => {
    validateForm.validateZipcode(form.zipCode);
  });

  form.password.addEventListener('input', () => {
    validateForm.validatePassword(form.password);
  });

  form.passwordConfirm.addEventListener('input', () => {
    validateForm.validatePasswordConfirm(form.passwordConfirm, form.password);
  });

  form.formContainer.addEventListener('submit', (event) => {
    if (!validateForm.emailValid) {
      validateForm.validateEmail(form.email);
      event.preventDefault();
    }
    if (!validateForm.countryValid) {
      validateForm.validateCountry(form.country);
      event.preventDefault();
    }
    if (!validateForm.zipValid) {
      validateForm.validateZipcode(form.zipCode);
      event.preventDefault();
    }
    if (!validateForm.passwordValid) {
      validateForm.validatePassword(form.password);
      event.preventDefault();
    }
    if (!validateForm.passwordConfirmValid) {
      validateForm.validatePasswordConfirm(form.passwordConfirm, form.password);
      event.preventDefault();
    }
  });
}());
