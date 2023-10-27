// import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import { setStorage as ExperimentalSetStorage, getLocalStorageItem, getStorage  } from "./operations/EXPERIMENTALstorageOperations";
import displayController from "./controllers/displayController";
import todoController from "./controllers/todoController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.jpg";
import NavBar from "./components/navbar";
import FilterSorter from "./components/filtersortButtons";
import data from "./data/todo.json";
import { addTodo } from "./operations/EXPERIMENTALtodoOperations";
import Todo from "./classes/Todo";
import { sortTodoBy, filterProjects } from "./operations/dataOperations";

const main = document.querySelector("#content");

/** +----------------------------------------------
 *  TESTING AREA
 * 
 *  +----------------------------------------------
 */
// ExperimentalSetStorage(data)


// addTodo(new Todo("Test", "DEASD", new Date().getTime(), "Crone"));
// addTodo(new Todo("Testsad", "DEAQWESD", new Date().getTime(), "assssASD"));

// console.log(getStorage());

// console.log(sortTodoBy(getStorage(), {category: 'dueDate',}))
// console.log(sortTodoBy(getStorage(), {category: 'priority',}))
// console.log(filterProjects(getStorage()));

// console.log(getLocalStorageItem(0));
/** +----------------------------------------------
 *  END OF TESTING AREA
 * 
 *  +----------------------------------------------
 */ 


document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.createElement("main");
  main.append(NavBar())
  main.appendChild(Form());
  main.appendChild(FilterSorter());

  const backgroundImage = new Image(1920, 1080);
  backgroundImage.classList.add("background");
  backgroundImage.src = Background;



  main.appendChild(mainContainer);

  displayController.displayTodoList(data);
  todoController.createTodoEvents();
});
