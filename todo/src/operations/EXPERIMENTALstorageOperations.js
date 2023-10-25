export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {

  const todoObject = {};
  todoObject.todoData = todoData;

  console.log(todoObject)
  
  localStorage.setItem(
    "todoData",
    JSON.stringify(todoObject)
  );
}

function getStorage() {
  const todo = [];
  const storageItem = getLocalStorageItem('todoData');

  console.log(storageItem.todoData);

  // for (let i = 0; i < localStorage.length; i += 1) {
  //   const storageItem = JSON.parse(
  //     localStorage.getItem(Object.keys(localStorage)[i]),
  //   );
  //   todo.push(storageItem);
  // }

  // console.log(todo)

  return todo;
}

function getLocalStorageItem(dataIndex) {
  if (typeof dataIndex === 'number') {
    return new Error('Index must be composed of Project followed by the Index');
  }

  return JSON.parse(localStorage.getItem(dataIndex));
}

export { setStorage, getStorage, getLocalStorageItem };
