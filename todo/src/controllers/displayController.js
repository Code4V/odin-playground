import TodoList from "../components/todoList";
import { getStorage, setStorage } from "../operations/storageOperations";
import { filterProjects } from "../operations/todoOperations";

const displayList = (dataList) =>
{
  if (localStorage.length != 0)
    dataList = getStorage()

  let projects = filterProjects(dataList);
  let filteredData = [];
  console.log(projects)
  
  const mainTodoListContainer = document.querySelector('main');
  mainTodoListContainer.innerHTML = "";
  
  if (localStorage.length == 0) setStorage(dataList);

  // mainTodoListContainer.appendChild(TodoList(dataList))
  // return;
  projects['filteredProject'].forEach(element => {
    let currentProj = Object.keys(element)[0]
    projects['projects'].forEach(project =>{
      if(project == currentProj) 
      mainTodoListContainer.appendChild(TodoList(element[project]))
      else return;
    })
  })



}



export { displayList };