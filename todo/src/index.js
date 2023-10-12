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

  main.appendChild(backgroundImage);

  main.appendChild(mainContainer);

  // displayController.toggleFilter();
  displayController.toggleDateOrder();
  displayController.displayList(data);

  console.log(todoController.getTodos);
});



// console.log(await (await fetch("https://reqres.in/api/users/")).json());

// console.log(new Date("September-09-2023").getTime())
