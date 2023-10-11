class TodoController {

  getTodos()
  {
    return new Promise((resolve) => {
      const todos = document.querySelectorAll('.todo-list__todos');

      resolve(todos);
    })
  }
}



export default TodoController;
