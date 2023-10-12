class TodoController {

  #currentTodos = [];

  get getTodos()
  {
    this.#currentTodos = document.querySelectorAll(".todo-list__todos");

    return this.#currentTodos;
  }

  get updateTodos()
  {
    this.#currentTodos = document.querySelectorAll(".todo-list__todos");
  }
}
const todoController = new TodoController();

export default todoController;
