import { deleteTodo, editTodo } from '../operations/todoOperations';
import displayController from './displayController';
import Certificate from '@carbon/icons/lib/checkmark--filled/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';
import FormInput from '../components/formInput';
import { getLocalStorageItem, getStorage } from '../operations/storageOperations';

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

        const todoUpdate = FormInput('titleUpdate', 'Enter new title').InputField({
          value: titleContent.textContent,
        });

        const todoUpdateDescription = FormInput(
          'descriptionUpdate',
          'Enter new Description',
        ).TextArea({
          value: descriptionContent.textContent,
          addClass: ['form__input-textarea'],
        });

        titleContent.replaceWith(todoUpdate);
        descriptionContent.replaceWith(todoUpdateDescription);

        editButtonAction.replaceWith(editButtonCheck);
      })

      editButtonCheck.addEventListener('click', () => {

        const newTodo = getLocalStorageItem(element.id);

        newTodo.title = document.querySelector('#titleUpdate').value;

        editTodo(element.id, newTodo);

        editButtonCheck.replaceWith(editButtonAction);
      })

    });
  }
}

const todoController = new TodoController();

export default todoController;
