import displayController from "./controllers/displayController";
import todoController from "./controllers/todoController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.jpg";
import NavBar from "./components/navbar";
import FilterSorter from "./components/filtersortButtons";
import data from "./data/todo.json";
import { setTodoStorage } from "./operations/storageOperations";

const main = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.createElement("main");
  main.append(NavBar(), Form(), FilterSorter(), mainContainer);

  displayController.displayTodoList();
  todoController.createTodoEvents();
});
