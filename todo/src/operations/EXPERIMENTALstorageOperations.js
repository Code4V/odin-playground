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
  const data = getLocalStorageItem('todoData');

  return data.todoData;
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
