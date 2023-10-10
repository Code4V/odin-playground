import TodoList from "../components/todoList";
import displayController from "../controllers/displayController";
import clearStorage, { getStorage, setStorage } from "./storageOperations";

/**
 * 
 * @param { Todo } data => A Todo object to be added to LocalStorage
 * @returns A Promise Object
 */
const addTodo = (data) => {
  const addPromise = new Promise((resolve, reject) => {
    if (typeof data !== "object") {
      reject("Data must be an Object");
      return;
    }

    if (data.constructor.name != "Todo") {
      reject("Must be type of Todo");
      return;
    }

    data = data.todoDetails;

    localStorage.setItem(
      `${data.project}-${localStorage.length}`,
      JSON.stringify(data)
    );
    
    const currentData = getStorage();
    displayController.displayList();

    resolve("Item has been added!");
  });

  return addPromise;
};

const deleteTodo = (dataIndex) => {
  const deletePromise = new Promise((resolve, reject) => {
    localStorage.removeItem(dataIndex);
    const currentData = getStorage();
    console.log({
      current: currentData
    })
    
    if (currentData.length === 0) {
      // clearStorage();
      displayController.displayList();
      reject("Data is now empty");
      return;
    }

    // clearStorage();

    displayController.displayList();
    resolve("Todo successfully deleted");
  });

  return deletePromise;
};

const editTodo = (dataIndex, updatedData) => {
  updatedData = JSON.stringify(updatedData);

  localStorage.setItem(dataIndex, updatedData);
};

export { addTodo, deleteTodo, editTodo };
