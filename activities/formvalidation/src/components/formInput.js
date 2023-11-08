import { format, addHours } from 'date-fns';

const FormInput = (name = 'input', displayName = 'default') => {
  const formInput = document.createElement('div');
  formInput.classList.add('form__input');

  const Label = document.createElement('label');
  Label.classList.add('form__input-label');
  Label.setAttribute('for', name);
  Label.textContent = displayName;

  const invalidID = 'invalid';

  const InvalidEntry = document.createElement('span');
  InvalidEntry.classList.add('form__input-invalid');
  InvalidEntry.id = invalidID + name;

  let Input = document.createElement('input');
  Input.classList.add('form__input-input');
  Input.type = 'input';
  Input.name = name;
  Input.id = name;

  formInput.append(Label, InvalidEntry);

  /**
   * Options includes:
   * @param { array || string } addClass - defaults to NULL
   * @param { boolean } isRequired - defaults to False
   * @param { string } placeholder  - defaults to the name
   * @param { string } value - defaults to NULL
   */
  const TextArea = (options = {}) => {
    Input = document.createElement('textarea');
    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;

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
    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;

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
    Input.type = 'datetime-local';

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    const currentDateTime = format(addHours(new Date(), 3), 'yyyy-MM-dd HH:mm');

    Input.required = options.isRequired ?? false;
    Input.min = currentDateTime;
    Input.value = currentDateTime;

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
    Input.type = 'number';

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;
    Input.min = 0;
    Input.max = 4;

    Input.addEventListener('focusout', () => {
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
    Input = document.createElement('select');

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.name = name;
    Input.id = name;

    InvalidEntry.id = invalidID + name;
    if (!options.choices) return formInput;

    options.choices.forEach((element) => {
      const option = document.createElement('option');

      // if (element.value == 0) option.defaultSelected = true
      option.value = element.value;
      option.innerText = element.content;

      Input.appendChild(option);
    });

    formInput.append(Input);
    return formInput;
  };

  const EmailField = (options = {}) => {
    Input.type = 'email';

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;

    formInput.append(Input);
    return formInput;
  };

  const PasswordField = (options = {}) => {
    Input.type = 'password';

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.required = options.isRequired ?? false;
    Input.placeholder = options.placeholder ?? name;
    Input.name = name;
    Input.id = name;
    Input.minLength = options.minLength ?? 8;

    Input.setAttribute('autocomplete', true);

    InvalidEntry.id = invalidID + name;
    formInput.append(Input);
    return formInput;
  };

  const SubmitForm = (options = {}) => {
    Input = document.createElement('button');
    Input.type = 'submit';

    if (options.addClass) Input.classList.add(...options.addClass);
    if (options.value) Input.value = options.value;

    Input.textContent = options.placeholder ?? name;

    formInput.append(Input);
    return formInput;
  };

  return {
    TextArea,
    InputField,
    DateField,
    NumberField,
    SelectField,
    PasswordField,
    EmailField,
    SubmitForm,
  };
};

export default FormInput;
