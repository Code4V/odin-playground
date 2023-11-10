export default function validateInput(inputElement) {
  const { minLength } = inputElement;

  if (inputElement.validity.valueMissing) {
    inputElement.setCustomValidity('Fill out this field!');
  } else if (inputElement.validity.badInput) { inputElement.setCustomValidity('Bad input'); } else if (inputElement.validity.typeMismatch) {
    inputElement.setCustomValidity('Invalid email address');
  } else if (inputElement.validity.tooShort) {
    inputElement.setCustomValidity(`You need ${minLength - parseInt(inputElement.value.length, 10)} letters more!`);
  } else inputElement.setCustomValidity('');

  return inputElement.validationMessage;
}

export function validatePassword(password) {
  const passwordRegex = {
    capitalLetters: /(?<capital>[A-Z]+)/gm,
    specialCharacters: /[$&+,:;=?@#|'<>.^*()%!-]+/gm,
    numbers: /[0-9]/gm,
  };

  if (!passwordRegex.capitalLetters.test(password)) {
    return 'Password must contain a Capital Letter!';
  }

  if (!passwordRegex.specialCharacters.test(password)) {
    return 'Password must contain a Special Character!';
  }

  if (!passwordRegex.numbers.test(password)) {
    return 'Password must contain a Number!';
  }

  return '';
}
