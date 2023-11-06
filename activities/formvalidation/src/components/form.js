import FormInput from './formInput';
import validateInput from '../operations/inputValidator';

export default function Form() {
  const form = document.createElement('form');
  form.classList.add('form');

  const minLength = 12;

  const emailInput = FormInput('email', 'Email').EmailField({
    isRequired: true,
    placeholder: 'Enter your Email Address',
  });
  const countryInput = FormInput('country', 'Country').InputField({
    isRequired: true,
    placeholder: 'Select Country',
  });
  const zipInput = FormInput('zip', 'Zip Code').InputField({
    isRequired: true,
    placeholder: 'Enter Zip Code',
  });
  const passInput = FormInput('password', 'Password').PasswordField({
    isRequired: true,
    placeholder: 'Enter your Password',
    minLength,
  });
  const cpassInput = FormInput('cpassword', 'Confirm Password').PasswordField({
    isRequired: true,
    placeholder: 'Confirm Password',
    minLength,
  });
  const submitButton = FormInput('submit', 'Submit').SubmitForm({
    placeholder: 'Submit',
  });

  form.append(
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
    submitButton,
  );

  const inputElements = [
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
  ].map((element) => element.childNodes[2]);

  const inputElementObjects = {
    [inputElements[0].id]: inputElements[0],
    [inputElements[1].id]: inputElements[1],
    [inputElements[2].id]: inputElements[2],
    [inputElements[3].id]: inputElements[3],
    [inputElements[4].id]: inputElements[4],
  };

  Object.values(inputElementObjects).forEach((element) => {
    element.addEventListener('input', (innerElement) => {
      document.querySelector(`#invalid${innerElement.id}`).textContent = validateInput(innerElement.email);
    });
  });

  inputElementObjects.zip.addEventListener('input', () => {
    const zipCodeRegexPH = /\d{4}/g;
    if (
      !zipCodeRegexPH.test(inputElementObjects.zip.value)
      || inputElementObjects.zip.value.length > 4
    ) {
      inputElementObjects.zip.setCustomValidity(
        'Not a valid Philippine Zip Code',
      );

      document.querySelector(
        `#invalid${inputElementObjects.zip.id}`,
      ).textContent = inputElementObjects.zip.validationMessage;
    }
  });

  inputElementObjects.cpassword.addEventListener('input', () => {
    if (
      inputElementObjects.password.value !== inputElementObjects.cpassword.value
    ) {
      inputElementObjects.password.setCustomValidity(
        'Password does not Match!',
      );
      inputElementObjects.cpassword.setCustomValidity(
        'Password does not Match!',
      );

      document.querySelector(
        `#invalid${inputElementObjects.password.id}`,
      ).textContent = inputElementObjects.password.validationMessage;
      document.querySelector(
        `#invalid${inputElementObjects.cpassword.id}`,
      ).textContent = inputElementObjects.cpassword.validationMessage;
    }
  });

  inputElementObjects.email.addEventListener('input', () => {
    document.querySelector(`#invalid${inputElementObjects.email.id}`).textContent = validateInput(inputElementObjects.email);
  });

  submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    // const formData = new FormData(form);
    // const formEntries = Object.fromEntries(formData);
  });

  return form;
}
