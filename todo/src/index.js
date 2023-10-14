import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import displayController from "./controllers/displayController";
import todoController from "./controllers/todoController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.jpg";


const main = document.querySelector("#content");

clearStorage();

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.createElement("main");
  main.appendChild(Form());

  const backgroundImage = new Image(1920, 1080);
  backgroundImage.classList.add("background");
  backgroundImage.src = Background;


  main.appendChild(mainContainer);

  displayController.toggleFilter();
  displayController.toggleDateOrder();
  displayController.displayTodoList(data);

  todoController.getTodos()
  todoController.createTodoEvents();
});