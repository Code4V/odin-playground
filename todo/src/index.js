// import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import displayController from "./controllers/displayController";
import todoController from "./controllers/todoController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.jpg";
import NavBar from "./components/navbar";
import FilterSorter from "./components/filtersortButtons";


const main = document.querySelector("#content");

console.log(document.documentElement.attributes);

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.createElement("main");
  main.append(NavBar())
  main.appendChild(Form());
  main.appendChild(FilterSorter());

  const backgroundImage = new Image(1920, 1080);
  backgroundImage.classList.add("background");
  backgroundImage.src = Background;



  main.appendChild(mainContainer);

  displayController.displayTodoList();
  todoController.createTodoEvents();
});