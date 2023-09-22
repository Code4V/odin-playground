import TodoList from "../components/todoList";
import { setStorage } from "../operations/storageOperations";

const displayList = (dataList) =>
{
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";

  if (localStorage.length == 0) setStorage(dataList);

  mainTodoListContainer.appendChild(TodoList(dataList))
}



export { displayList };