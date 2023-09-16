import Todo from "./todo";

const TodoList = (todoData) =>
{
  const todosContainer = document.createElement('section');
  todosContainer.classList.add("todo-list");


  if (localStorage.length != 0)
  {
    todoData = Array.from(localStorage);
  }


  todoData.forEach(element => {
    if (localStorage.length != 0) element = JSON.parse(element);

    let todoElement = Todo(element);
    todoElement.classList.add('todo-list__todos');

    todosContainer.appendChild(todoElement);
  });  

  return todosContainer;
}

export default TodoList;