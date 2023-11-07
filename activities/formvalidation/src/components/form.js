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
    addClass: ['form__input-submit'],
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
    element.addEventListener('input', () => {
      document.querySelector(`#invalid${element.id}`).textContent = validateInput(element);
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
    } else {
      inputElementObjects.zip.setCustomValidity('');
    }
    document.querySelector(
      `#invalid${inputElementObjects.zip.id}`,
    ).textContent = inputElementObjects.zip.validationMessage;
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
    } else {
      inputElementObjects.password.setCustomValidity('');
      inputElementObjects.cpassword.setCustomValidity('');
    }
    document.querySelector(
      `#invalid${inputElementObjects.password.id}`,
    ).textContent = inputElementObjects.password.validationMessage;
    document.querySelector(
      `#invalid${inputElementObjects.cpassword.id}`,
    ).textContent = inputElementObjects.cpassword.validationMessage;
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // const formData = new FormData(form);
    // const formEntries = Object.fromEntries(formData);

    // const inputVerification = Object.values(inputElementObjects).map((inputElement) => {
    //   if (!inputElement.validity.valid) return false;
    //   return true;
    // });

    return true;
  });

  return form;
}
