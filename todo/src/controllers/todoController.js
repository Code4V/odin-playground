import { deleteTodo } from '../operations/todoOperations';
import displayController from './displayController';

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
      // const title = element.childNodes[0].childNodes[0].childNodes[0].textContent

      const deleteButtonAction = element.childNodes[2].childNodes[0];

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
    });
  }
}

const todoController = new TodoController();

export default todoController;
