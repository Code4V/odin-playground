import TodoList from "../components/todoList";
import { setStorage } from "../operations/storageOperations";
import data from "./../data/todo.json";

const displayList = (dataList) =>
{
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";

  mainTodoListContainer.appendChild(TodoList(dataList))
 
  console.log("DATA", {data})
  if (localStorage.length == 0) setStorage(data);
}



export { displayList };