import Certificate from '@carbon/icons/lib/checkmark--filled/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';
import { deleteTodo, editTodo, formatTodoPriority } from '../operations/todoOperations';
import displayController from './displayController';
import FormInput from '../components/formInput';
import { getLocalStorageItem } from '../operations/storageOperations';

class TodoController {
  #currentTodos = [];

  getTodos() {
    return new Promise((resolve, reject) => {
      this.#currentTodos = document.querySelectorAll('.todo-list__todos');
      if (this.#currentTodos.length === 0) {
        reject(new Error('No Data Yet'));
      }

      resolve(this.#currentTodos);
    });
  }

  createTodoEvents() {
    this.#currentTodos.forEach((element) => {
      const titleContent = element.childNodes[0].childNodes[0];
      const priorityContent = element.childNodes[0].childNodes[1];

      const descriptionContent = element.childNodes[1].childNodes[0];

      const editButtonCheck = toSVG({
        ...Certificate,
        attrs: getAttributes(Certificate.attrs),
      });

      const deleteButtonAction = element.childNodes[2].childNodes[0];
      const editButtonAction = element.childNodes[2].childNodes[1];

      deleteButtonAction.addEventListener('click', async () => {
        // console.log(element.id);

        try {
          await deleteTodo(element.id);
        } catch (err) {
          // console.log(err);
        }

        displayController.displayTodoList();

        try {
          await this.getTodos();
        } catch (err) {
          // console.log(err);
        }

        this.createTodoEvents();
      });

      editButtonAction.addEventListener('click', () => {
        const todoUpdate = FormInput(
          'titleUpdate',
          'Enter new title',
        ).InputField({
          value: titleContent.textContent,
        });

        const todoUpdateDescription = FormInput(
          'descriptionUpdate',
          'Enter new Description',
        ).TextArea({
          value: descriptionContent.textContent,
          addClass: ['form__input-textarea'],
        });


        const todoUpdatePriority = FormInput('priorityUpdate', 'Priority').SelectField({
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
          addClass: ['form__input-priority'],
          isRequired: true,
        });

        todoUpdatePriority.classList.add('todo__title-priority');

        titleContent.replaceWith(todoUpdate);
        descriptionContent.replaceWith(todoUpdateDescription);
        priorityContent.replaceWith(todoUpdatePriority);


        editButtonAction.replaceWith(editButtonCheck);
      });

      editButtonCheck.addEventListener('click', () => {
        const newTodo = getLocalStorageItem(element.id);

        const todoUpdate = document.querySelector('#titleUpdate');
        const descriptionUpdate = document.querySelector('#descriptionUpdate');
        const todoUpdatePriority = document.querySelector('#priorityUpdate');

        newTodo.title = todoUpdate.value;
        newTodo.description = descriptionUpdate.value;
        newTodo.priority = parseInt(todoUpdatePriority.value, 10);

        editTodo(element.id, newTodo);

        titleContent.textContent = todoUpdate.value;
        descriptionContent.textContent = descriptionUpdate.value;
        priorityContent.textContent = formatTodoPriority(newTodo.priority);

        
        todoUpdate.replaceWith(titleContent);
        descriptionUpdate.replaceWith(descriptionContent);
        todoUpdatePriority.replaceWith(priorityContent)

        editButtonCheck.replaceWith(editButtonAction);
      });
    });
  }
}

const todoController = new TodoController();

export default todoController;
