import { filterProjects } from "../operations/todoOperations";
import Todo from "./todo";

const TodoList = (todoData) => {

  if (todoData.length === 0) {
    todosContainer.innerHTML = "NO DATA TO SHOW";
    return todosContainer;
  }

  if (localStorage.length != 0) {
    todoData = Array.from(localStorage);
  }

  const todosContainer = document.createElement("section");
  todosContainer.classList.add("todo-list");
  
  todoData.forEach((element, index) => {  
    if (localStorage.length != 0) element = JSON.parse(element);
    
    let todoElement = Todo(element, index);
    todoElement.classList.add("todo-list__todos");

    todosContainer.appendChild(todoElement);
  });
  
  return todosContainer;
};

export default TodoList;
