import TodoList from "../components/todoList";
import { setStorage } from "../operations/storageOperations";
import data from "./../data/todo.json";

const displayList = (dataList) =>
{
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";

  if (localStorage.length == 0) setStorage(data);

  mainTodoListContainer.appendChild(TodoList(dataList))
}



export { displayList };