export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

async function setStorage(todoData) {
  const setPromise = new Promise((resolve, reject) => {
    if (localStorage.length != 0) {
      reject("Local Storage Already Filled");
      return;
    }

    todoData.forEach((element, index) => {
      console.log(element);
      localStorage.setItem(`${index}`, JSON.stringify(element));
    });

    resolve("Data Filled Successfully");
  });

  try 
  {
    const useSet = await setPromise;
    console.log(useSet);
  
  } catch (err) { console.log(err) }
}

function getStorage() {
  let todo = [];

  Array.from(localStorage).forEach((element) => {
    element = JSON.parse(element);

    todo.push(element);
  });

  return todo;
}

export { setStorage, getStorage };
