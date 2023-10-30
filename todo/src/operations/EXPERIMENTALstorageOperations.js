import { filterProjects } from './dataOperations';
import convertTodoObjectsToArray from './todoObjectProcessor';

export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {
  const todoObject = {};
  todoObject.todoData = {};

  const arrangedTodo = filterProjects(todoData);

  arrangedTodo.projects.forEach((projectName) => {
    const test = {};

    arrangedTodo.filteredProject[projectName].forEach((element) => {
      test[element.id] = element;
    });

    todoObject.todoData[projectName] = test;
  });

  localStorage.setItem('todoData', JSON.stringify(todoObject));
}

function getLocalStorageItem(dataIndex = 'todoData') {
  if (typeof dataIndex === 'number') {
    return new Error('Index must be composed of Project followed by the Index');
  }

  if (dataIndex !== 'todoData') {
    return JSON.parse(localStorage.getItem('todoData')).todoData[
      dataIndex.split('-')[0]
    ][dataIndex];
  }

  return JSON.parse(localStorage.getItem(dataIndex));
}

function getStorage() {
  const data = getLocalStorageItem('todoData').todoData;

  return convertTodoObjectsToArray(data);
}

export { setStorage, getStorage, getLocalStorageItem };
