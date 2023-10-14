export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {
  todoData.forEach((element, index) => {
    localStorage.setItem(
      `${element.project}-${index}`,
      JSON.stringify(element),
    );
  });
}

function getStorage() {
  const todo = [];
  let storageItem;

  for (let i = 0; i < localStorage.length; i += 1) {
    storageItem = JSON.parse(
      localStorage.getItem(Object.keys(localStorage)[i]),
    );
    todo.push(storageItem);
  }

  return todo;
}

function getLocalStorageItem(dataIndex) {
  if (typeof dataIndex === 'number') { return new Error('Index must be composed of Project followed by the Index'); }

  return JSON.parse(localStorage.getItem(dataIndex));
}

export { setStorage, getStorage, getLocalStorageItem };
