import { getStorage, setStorage } from "../operations/storageOperations";
import Todo from "./todo";

const TodoList = (todoData) =>
{

  const todosContainer = document.createElement('section');
  todosContainer.classList.add("todo-list");
  
  todosContainer.innerHTML = "";

  if (todoData.length === 0)
  {
    todosContainer.innerHTML = "NO DATA TO SHOW";
    return todosContainer;
  }

  if (localStorage.length != 0)
  {
    todoData = Array.from(localStorage);
  }
  

  todoData.forEach((element, index) => {
    if (localStorage.length != 0) element = JSON.parse(element);

    let todoElement = Todo(element, index);
    todoElement.classList.add('todo-list__todos');

    todosContainer.appendChild(todoElement);
  });  

  // setStorage(todoData);

  return todosContainer;
}

export default TodoList;