import TodoList from "../components/todoList";
import clearStorage, { getStorage, setStorage } from "../operations/storageOperations";
import { filterProjects } from "../operations/todoOperations";

const displayList = (dataList, filtered = true) => {
  // if (localStorage.length != 0) dataList = getStorage();
  if (localStorage.length == 0) setStorage(dataList);
  
  let projects = filterProjects(dataList);

  const mainTodoListContainer = document.querySelector("main");
  mainTodoListContainer.innerHTML = "";


  if (!filtered)
  {
    mainTodoListContainer.appendChild(TodoList(dataList))
    return;
  } 
  else 
  {
    clearStorage();
    projects["filteredProject"].forEach((element) => {
      let currentProj = Object.keys(element)[0];
      projects["projects"].forEach((project) => {
        if (project == currentProj)
        {
          mainTodoListContainer.appendChild(TodoList(element[project]));
          setStorage(element[project]);
        }
        else return;
      });
    });
  }
};

export { displayList };
