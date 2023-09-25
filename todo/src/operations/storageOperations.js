export default function clearStorage() {
  window.localStorage.clear();
  window.sessionStorage.clear();
}

async function setStorage(todoData) {
  console.log(todoData);
  const setPromise = new Promise((resolve, reject) => {
    // if (localStorage.length != 0) {
    //   reject("Local Storage Already Filled");
    //   return;
    // }

    todoData.forEach((element, index) => {
      localStorage.setItem(
        `${element.project}-${index}`,
        JSON.stringify(element)
      );
    });

    resolve("Data Filled Successfully");
  });

  try {
    const useSet = await setPromise;
    console.log(useSet);
  } catch (err) {
    console.log(err);
  }
}

function getStorage() {
  let todo = [];
  let storageItem;

  for (var i = 0; i < localStorage.length; i++) {
    storageItem = JSON.parse(
      localStorage.getItem(Object.keys(localStorage)[i])
    );
    todo.push(storageItem);
  }

  return todo;
}

export { setStorage, getStorage };
