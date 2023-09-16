const FormTextArea = () =>
{
  const formInput = document.createElement("div");
  formInput.classList.add("form__input");

  const Label = document.createElement("label");
  Label.classList.add(`form__input-label`);
  Label.setAttribute('for', name);  
  Label.textContent = name;

  var Input = document.createElement("textarea"); 
  
  Input.classList.add(`form__input-input`);
  Input.name = name;
  Input.id = name;

  formInput.append(Label, Input);

  return formInput;
}