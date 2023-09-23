export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

function setStorage(todoData) {

  console.log("AT SET", todoData)
  const setPromise = new Promise((resolve, reject) =>
  {
    if (localStorage.length != 0) {
      reject("Local Storage Already Filled");
      return;
    }

    todoData.forEach((element, index) => {
      console.log(element)
      localStorage.setItem(`${index}`, JSON.stringify(element));
    });

    resolve("Data Filled Successfully")
  })

  setPromise.then(message => {
    console.log(message);
  }).catch(err => {
    console.log(err);
  })

}

function getStorage()
{
  let todo = [];


  Array.from(localStorage).forEach(element => {
    element = JSON.parse(element);
    console.log({element})


    todo.push(element);
    
    console.log({todo})
  })

  return todo;
}

export { setStorage, getStorage };
