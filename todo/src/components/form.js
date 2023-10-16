import { format } from 'date-fns';
import addFilled from '@carbon/icons/lib/add/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';
import FormInput from './formInput';
import { addTodo } from '../operations/todoOperations';
import Todo from '../classes/Todo';
import displayController from '../controllers/displayController';
import todoController from '../controllers/todoController';

const Form = () => {
  const formContainer = document.createElement('section');

  const form = document.createElement('form');
  form.classList.add('form');
  form.classList.add('todo');

  const titleField = FormInput('title', 'Title').InputField({
    placeholder: 'Enter To-do Title',
    isRequired: true,
  });

  const projectField = FormInput('project', 'Project').InputField({
    placeholder: 'Choose Project',
    isRequired: true,
    addClass: ['form__input-input--small'],
  });

  const numberField = FormInput('number', 'Priority').SelectField({
    choices: [
      {
        value: 0,
        content: 'Low',
      },
      {
        value: 1,
        content: 'Normal',
      },
      {
        value: 2,
        content: 'High',
      },
    ],
    isRequired: true,
  });

  const descriptionField = FormInput('description', 'Description').TextArea({
    placeholder: "What's on your mind?",
    isRequired: true,
    addClass: ['form__input-textarea'],
  });

  const dueDateField = FormInput('dueDate', 'Due Date').DateField({
    isRequired: true,
  });

  const addIcon = toSVG({
    ...addFilled,
    attrs: getAttributes(addFilled.attrs),
  });

  const formSubmit = document.createElement('button');
  formSubmit.classList.add('form__submit');
  formSubmit.type = 'submit';

  formSubmit.appendChild(addIcon);

  const formTitle = document.createElement('section');
  formTitle.classList.add('todo__title');

  const formContent = document.createElement('section');
  formContent.classList.add('todo__content');

  const formActions = document.createElement('section');
  formActions.classList.add('todo__actions');

  formTitle.append(titleField, projectField, numberField);
  formContent.append(descriptionField);
  formActions.append(dueDateField, formSubmit);

  form.append(formTitle, formContent, formActions);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const FormEvent = new FormData(form);
    const res = Object.fromEntries(FormEvent);
    const date = new Date(res.dueDate).getTime();

    await addTodo(
      new Todo(
        res.title,
        res.description,
        date,
        res.project.trim(),
        parseInt(res.number, 10),
      ),
    );

    displayController.displayTodoList();
    todoController.createTodoEvents();

    [
      titleField,
      projectField,
      numberField,
      descriptionField,
      dueDateField,
    ].forEach((element) => {
      const formInput = element.childNodes[1];

      switch (formInput.id) {
        case 'dueDate':
          formInput.value = format(new Date(), 'yyyy-MM-dd HH:mm');
          break;

        case 'number':
          formInput.value = 0;
          break;

        default:
          formInput.value = '';
      }
    });
  });

  formContainer.appendChild(form);

  return formContainer;
};

export default Form;
