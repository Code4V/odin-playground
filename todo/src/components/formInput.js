import { format } from "date-fns";

const FormInput = (name = "input", displayName = "default") => {
  const formInput = document.createElement("div");
  formInput.classList.add("form__input");

  const Label = document.createElement("label");
  Label.classList.add(`form__input-label`);
  Label.setAttribute("for", name);
  Label.textContent = displayName;

  formInput.append(Label);

  const TextArea = () => {
    var Input = document.createElement("textarea");
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;

    formInput.append(Input);
    return formInput;
  };

  const InputField = () => {
    var Input = document.createElement("input");
    Input.type = "input";
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;

    formInput.append(Input);
    return formInput;
  };

  const DateField = () => {
    var Input = document.createElement("input");

    Input.type = "date";
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;
    Input.min = format(new Date(), "yyyy-MM-dd");
    Input.value = format(new Date(), "yyyy-MM-dd");

    formInput.append(Input);
    return formInput;
  };

  const NumberField = () => {
    var Input = document.createElement("input");
    Input.type = "number";
    Input.classList.add(`form__input-input`);
    Input.name = name;
    Input.id = name;
    Input.min = 0;
    Input.max = 4;

    Input.addEventListener("keyup", () => {
      if (Input.value > Input.max) {
        Input.value = Input.max;
      }
      if (Input.value < Input.min) {
        Input.value = Input.min;
      }
    });
    formInput.append(Input);
    return formInput;
  };

  return { TextArea, InputField, DateField, NumberField };
};

export default FormInput;
