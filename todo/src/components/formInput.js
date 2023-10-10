import { format } from "date-fns";

const FormInput = (name = "input", displayName = "default") => {
  const formInput = document.createElement("div");
  formInput.classList.add("form__input");

  const Label = document.createElement("label");
  Label.classList.add(`form__input-label`);
  Label.setAttribute("for", name);
  Label.textContent = displayName;

  formInput.append(Label);

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const TextArea = (options = {}) => {
    var Input = document.createElement("textarea");
    Input.classList.add(`form__input-input`);
    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;
    Input.name = name;
    Input.id = name;

    formInput.append(Input);
    return formInput;
  };

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const InputField = (options = {}) => {
    var Input = document.createElement("input");
    Input.type = "input";
    Input.classList.add(`form__input-input`);

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;
    Input.name = name;
    Input.id = name;

    formInput.append(Input);
    return formInput;
  };

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const DateField = (options = {}) => {
    var Input = document.createElement("input");

    Input.type = "datetime-local";
    Input.classList.add(`form__input-input`);

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.name = name;
    Input.id = name;
    Input.min = format(new Date(), "yyyy-MM-dd HH:mm");
    Input.value = format(new Date(), "yyyy-MM-dd HH:mm");

    formInput.append(Input);
    return formInput;
  };

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const NumberField = (options = {}) => {
    var Input = document.createElement("input");
    Input.type = "number";
    Input.classList.add(`form__input-input`);

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;
    Input.name = name;
    Input.id = name;
    Input.min = 0;
    Input.max = 4;

    Input.addEventListener("focusout", (e) => {
      console.log(Input.max, Input.min);
      if (Input.value > Input.max) {
        Input.value = Input.max;
      } else if (Input.value < Input.min) {
        Input.value = Input.min;
      }
    });
    formInput.append(Input);
    return formInput;
  };

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { array } choices - will return early if choices are NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const SelectField = (options = {}) => {
    var Input = document.createElement("select");
    Input.classList.add(`form__input-input`);

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.name = name;
    Input.id = name;

    if (!options.choices) return;

    options.choices.forEach((element) => {
      const option = document.createElement("option");

      // if (element.value == 0) option.defaultSelected = true
      option.value = element.value;
      option.innerText = element.content;

      Input.appendChild(option);
    });

    formInput.append(Input);
    return formInput;
  };

  return { TextArea, InputField, DateField, NumberField, SelectField };
};

export default FormInput;
