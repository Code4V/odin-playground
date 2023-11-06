import FormInput from './formInput';

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
  submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();

    // const formData = new FormData(form);

    const regex = /\d{4}/g;

    // const formEntries = Object.fromEntries(formData);

    inputElements.forEach((element) => {
      if (element.validity.valueMissing) element.setCustomValidity('Fill out this field!');
      else if (element.validity.badInput) element.setCustomValidity('Bad input');
      else if (element.validity.typeMismatch) element.setCustomValidity('Invalid email address');
      else if (element.validity.tooShort) {
        element.setCustomValidity(
          `Password is ${minLength - element.value.length} letter short`,
        );
      } else element.setCustomValidity('');

      document.querySelector(`#invalid${element.id}`).textContent = element.validationMessage;
    });

    if (!regex.test(inputElements[2].value) || inputElements[2].value.length > 4) {
      inputElements[2].setCustomValidity('Not a valid Philippine Zip Code');

      document.querySelector(`#invalid${inputElements[2].id}`).textContent = inputElements[2].validationMessage;
    }

    if (inputElements[3].value !== inputElements[4].value) {
      inputElements[3].setCustomValidity('Password does not Match!');
      inputElements[4].setCustomValidity('Password does not Match!');

      document.querySelector(`#invalid${inputElements[3].id}`).textContent = inputElements[3].validationMessage;
      document.querySelector(`#invalid${inputElements[4].id}`).textContent = inputElements[4].validationMessage;
    }
  });

  return form;
}
