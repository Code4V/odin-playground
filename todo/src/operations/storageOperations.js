export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {
  const setPromise = new Promise((resolve) => {
    todoData.forEach((element, index) => {
      localStorage.setItem(
        `${element.project}-${index}`,
        JSON.stringify(element)
      );
    });

    resolve("Data Filled Successfully");
  });

  return setPromise;
}

function getStorage() {
  const todo = [];
  let storageItem;

  for (let i = 0; i < localStorage.length; i += 1) {
    storageItem = JSON.parse(
      localStorage.getItem(Object.keys(localStorage)[i])
    );
    todo.push(storageItem);
  }

  return todo;
}

export { setStorage, getStorage };
