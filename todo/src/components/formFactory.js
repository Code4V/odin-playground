import { format } from "date-fns";

const FormFactory = (name = "input", displayName = "default") =>
{
  const formInput = document.createElement("div");
  formInput.classList.add("form__input");

  const Label = document.createElement("label");
  Label.classList.add(`form__input-label`);
  Label.setAttribute('for', name);  
  Label.textContent = displayName;

  formInput.append(Label);

  
  const TextArea = () =>
  {
    var Input = document.createElement("textarea"); 
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;
    
    formInput.append(Input);
    return formInput;
  }

  const InputField = () => 
  {
    var Input = document.createElement("input");
    Input.type = "input";
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;

    formInput.append(Input);
    return formInput;
  }

  const DateField = () => 
  {
    var Input = document.createElement("input");
    
    Input.type = "date";
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;
    console.log(format(new Date(), "yyyy-MM-dd"));
    Input.min = format(new Date(), "yyyy-MM-dd");
    Input.value = format(new Date(), "yyyy-MM-dd");

    formInput.append(Input)
    return formInput;
  }



  return { TextArea, InputField, DateField };
}

export default FormFactory;