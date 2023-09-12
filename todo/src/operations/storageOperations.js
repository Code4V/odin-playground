export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {
  if (localStorage.length != 0) return;

  todoData.forEach((element, index) => {
    localStorage.setItem(index, JSON.stringify(element));
  });
}

export { setStorage };
