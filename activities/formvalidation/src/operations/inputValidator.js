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
