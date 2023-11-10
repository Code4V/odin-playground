import FormInput from './formInput';
import validateInput, { validatePassword } from '../operations/inputValidator';
import Congrats from './congrats';

export default function Form() {
  const form = document.createElement('form');
  form.classList.add('form');

  const minLength = 12;

  const emailInput = FormInput('email', 'Email').EmailField({
    isRequired: true,
    placeholder: 'Enter your Email Address',
  });
  const countryInput = FormInput('country', 'Country').SelectField({
    choices: [
      {
        value: '0',
        content: 'Philippines',
      },
      {
        value: '1',
        content: 'Canada',
      },
      {
        value: '2',
        content: 'China',
      },
    ],
    isRequired: true,
    placeholder: 'Select Country',
    addClass: ['form__input-input'],
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

  const showPass = document.createElement('button');
  showPass.setAttribute('style', 'display: none;');
  showPass.classList.add('form__input-submit');
  showPass.type = 'button';
  showPass.innerText = 'ShowPass';

  form.append(
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
    showPass,
    submitButton,
  );

  const inputElements = [
    emailInput,
    countryInput,
    zipInput,
    passInput,
    cpassInput,
  ].map((element) => element.childNodes[2]);

  const inputObjects = {
    [inputElements[0].id]: inputElements[0],
    [inputElements[1].id]: inputElements[1],
    [inputElements[2].id]: inputElements[2],
    [inputElements[3].id]: inputElements[3],
    [inputElements[4].id]: inputElements[4],
  };

  Object.values(inputObjects).forEach((element) => {
    element.addEventListener('focusout', () => {
      document.querySelector(`#invalid${element.id}`).textContent = validateInput(element);
    });
  });

  inputObjects.zip.addEventListener('focusout', () => {
    const countryZipRegex = {
      Philippines: /\d{4}/,
      Canada: /[A-Z][0-9][A-Z]/,
      China: /[0-9]{6}/,
    };

    switch (inputObjects.country.value) {
      case '0':
        if (
          !countryZipRegex.Philippines.test(inputObjects.zip.value)
          || inputObjects.zip.value.length > 4
        ) {
          inputObjects.zip.setCustomValidity('Not a valid Philippine Zip Code');
        } else {
          inputObjects.zip.setCustomValidity('');
        }
        break;
      case '1':
        if (
          !countryZipRegex.Canada.test(inputObjects.zip.value)
          || inputObjects.zip.value.length > 3
        ) {
          inputObjects.zip.setCustomValidity('Not a valid Canada Zip Code');
        } else {
          inputObjects.zip.setCustomValidity('');
        }
        break;
      case '2':
        if (
          !countryZipRegex.China.test(inputObjects.zip.value)
          || inputObjects.zip.value.length > 6
        ) {
          inputObjects.zip.setCustomValidity('Not a valid China Zip Code');
        } else {
          inputObjects.zip.setCustomValidity('');
        }
        break;
      default:
        break;
    }
    document.querySelector(`#invalid${inputObjects.zip.id}`).textContent = inputObjects.zip.validationMessage;
  });

  inputObjects.country.addEventListener('focusout', () => {
    inputObjects.zip.value = '';
  });

  [inputObjects.password, inputObjects.cpassword].forEach((passInputs) => {
    passInputs.addEventListener('focusout', () => {
      if (passInputs.validity.tooShort) {
        passInputs.setCustomValidity(`You need ${minLength - parseInt(passInputs.value.length, 10)} letters more!`);
      }
      if (inputObjects.password.value !== passInputs.value) {
        passInputs.setCustomValidity('Password does not Match!');
      }
      passInputs.setCustomValidity(validatePassword(passInputs.value));
      document.querySelector(`#invalid${passInputs.id}`).textContent = passInputs.validationMessage;
    });
  });

  showPass.addEventListener('mousedown', () => {
    inputObjects.password.type = 'text';
    inputObjects.cpassword.type = 'text';
  });

  showPass.addEventListener('mouseup', () => {
    inputObjects.password.type = 'password';
    inputObjects.cpassword.type = 'password';
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // const formData = new FormData(form);
    // const formEntries = Object.fromEntries(formData);

    // const inputVerification = Object.values(inputObjects).map((inputElement) => {
    //   if (!inputElement.validity.valid) return false;
    //   return true;
    // });

    return document.querySelector('#main').insertAdjacentElement('afterbegin', Congrats());
  });

  return form;
}
