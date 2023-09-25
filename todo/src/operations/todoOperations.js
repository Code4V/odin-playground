import TodoList from "../components/todoList";
import { displayList , displayController } from "../controllers/displayController";
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

    // currentData.push(data);
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

  // displayList(currentData);
  displayController.displayList(currentData)
};

const deleteTodo = (currentData, dataIndex) => {
  const deletePromise = new Promise((resolve, reject) => {
    // if (
    //   currentData.filter((element, index) => index === dataIndex).length == 0
    // ) {
    //   reject("Data not found");
    //   return;
    // }


    
    
    console.log("NOEW", currentData);
    // currentData.splice(dataIndex, 1);
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
    setStorage(currentData);

    resolve("Todo successfully deleted");
  });

  deletePromise
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("AT END OF DELETE", currentData);

  // displayList(currentData);
  displayController.displayList(currentData)
  // return currentData;
};

const filterProjects = (todoData) => {
  let projects = [];
  let filteredProject = [];

  todoData.filter((element) => {
    if (projects.includes(element.project)) return;
    projects.push(element.project);
  });

  projects.forEach((outerElement) => {
    var newObject = {
      [outerElement]: [],
    };

    todoData.forEach((innerElement) => {
      if (innerElement.project == outerElement) {
        newObject[outerElement].push(innerElement);
        return;
      } else return;
    });

    filteredProject.push(newObject);
  });

  return { projects, filteredProject };
};

export { addTodo, deleteTodo, filterProjects };
