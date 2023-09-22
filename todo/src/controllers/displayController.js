import TodoList from "../components/todoList";
import { setStorage } from "../operations/storageOperations";
import { filterProjects } from "../operations/todoOperations";

const displayList = (dataList) =>
{
  let projects = filterProjects(dataList);
  
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";

  if (localStorage.length == 0) setStorage(dataList);

  mainTodoListContainer.appendChild(TodoList(dataList))
}



export { displayList };