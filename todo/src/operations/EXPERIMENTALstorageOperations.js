import { filterProjects } from "./dataOperations";

export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {

  const todoObject = {};
  todoObject.todoData = {};

  const arrangedTodo = filterProjects(todoData);

  arrangedTodo.projects.forEach(projectName => {
    todoObject.todoData[projectName] = arrangedTodo.filteredProject[projectName]
  })

  localStorage.setItem(
    "todoData",
    JSON.stringify(todoObject)
  );
}

function getStorage() {
  const data = getLocalStorageItem('todoData').todoData;

  const arrangedTodoData = [];
  
  Object.values(data).forEach(element =>{
    arrangedTodoData.push(...element)
  })

  return arrangedTodoData;
}

function getLocalStorageItem(dataIndex) {
  // if (typeof dataIndex === 'number') {
  //   return new Error('Index must be composed of Project followed by the Index');
  // }

  if(dataIndex !== 'todoData') {
    return JSON.parse(localStorage.getItem('todoData')).todoData[dataIndex];
  }

  return JSON.parse(localStorage.getItem(dataIndex));
}

export { setStorage, getStorage, getLocalStorageItem };
