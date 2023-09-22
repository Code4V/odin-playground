import TodoList from "../components/todoList";
import { setStorage } from "../operations/storageOperations";
import { filterProjects } from "../operations/todoOperations";

const displayList = (dataList) =>
{
  let projects = filterProjects(dataList);
  let filteredData = [];
  
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";
  
  if (localStorage.length == 0) setStorage(dataList);

  dataList.forEach(element => {
    
  })

  console.log(projects)


  mainTodoListContainer.appendChild(TodoList(dataList))
}



export { displayList };