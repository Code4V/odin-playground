export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {
  const setPromise = new Promise((resolve, reject) =>
  {
    if (localStorage.length != 0) {
      reject("Local Storage Already Filled");
      return;
    }

    todoData.forEach((element, index) => {
      localStorage.setItem(index, JSON.stringify(element));
    });

    resolve("Data Filled Successfully")
  })

  setPromise.then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err);
  })

}

export { setStorage };
