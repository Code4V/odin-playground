import TodoList from "../components/todoList";
import displayController from "../controllers/displayController";
import clearStorage, { getStorage, setStorage } from "./storageOperations";

const addTodo = (currentData, data) => {
  // var storedData = filteredProject.from(localStorage);
  // if (storedData.includes(JSON.stringify(data))) return alert("ENGK");

  const addPromise = new Promise((resolve, reject) => {
    if (!currentData) {
      reject("No data has been inserted!");
      return;
    }

    if (typeof data !== "object") {
      reject("Data must be an Object");
      return;
    }

    if (data.constructor.name != "Todo") {
      reject("Must be type of Todo");
      return;
    }

    data = data.todoDetails;

    localStorage.setItem(`${data.project}-${localStorage.length}`, JSON.stringify(data));
    currentData = getStorage();

    resolve("Item has been added!");
  });

  addPromise
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });

  displayController.displayList(currentData)
 };

const deleteTodo = (currentData, dataIndex) => {
  const deletePromise = new Promise((resolve, reject) => {
    
    localStorage.removeItem(dataIndex);
    currentData = getStorage();

    if (currentData.length === 0) {
      clearStorage();
      displayList(currentData);
      reject("Data is now empty");
      return;
    }

    clearStorage();
    console.log("AFTER CLEAR", { currentData, dataIndex });
    
    resolve("Todo successfully deleted");
  });
  
  deletePromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
  
  displayController.displayList(currentData)
};

export { addTodo, deleteTodo  };
