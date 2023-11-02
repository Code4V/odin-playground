import { sortByProject } from './dataOperations';
import convertTodoObjectsToArray from './todoObjectProcessor';

export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setTodoStorage(todoData) {
  const todoObject = {};
  todoObject.todoData = {};

  const arrangedTodo = sortByProject(todoData);

  Object.keys(arrangedTodo).forEach((projectName) => {
    const todoData = {};

    arrangedTodo[projectName].forEach((element) => {
      todoData[element.id] = element;
    });

    todoObject.todoData[projectName] = todoData;
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

function getTodoStorage() {
  const data = getLocalStorageItem('todoData');

  if (data === null) {
    setTodoStorage([]);
    return getTodoStorage();
  }

  return convertTodoObjectsToArray(data.todoData);
}

export { setTodoStorage, getTodoStorage, getLocalStorageItem };
