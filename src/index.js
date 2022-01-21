const form = (function () {
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

const formError = (function () {
  const countryError = document.querySelector('.country-error');
  const zipCodeError = document.querySelector('.code-error');
  const passwordError = document.querySelector('.password-error');
  const passwordConfirmError = document.querySelector('.password-confirm-error');
  const emailError = document.querySelector('.email-error');

  return {
    countryError, zipCodeError, passwordError, passwordConfirmError, emailError,
  };
}());

const formListeners = (function () {
  form.email.addEventListener('input', (event) => {
    console.log(event);
  });

  form.country.addEventListener('input', (event) => {
    console.log(event);
  });

  form.zipCode.addEventListener('input', (event) => {
    console.log(event);
  });

  form.password.addEventListener('input', (event) => {
    console.log(event);
  });

  form.passwordConfirm.addEventListener('input', (event) => {
    console.log(event);
  });

  form.formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
  });
}());
