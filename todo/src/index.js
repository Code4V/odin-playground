import displayController from "./controllers/displayController";
import todoController from "./controllers/todoController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.jpg";
import NavBar from "./components/navbar";
import FilterSorter from "./components/filtersortButtons";
import data from "./data/todo.json";

const main = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.createElement("main");
  main.append(NavBar(), Form(), FilterSorter(), mainContainer);

  displayController.displayTodoList();
  todoController.createTodoEvents();
});

const test = ["test", "crap", "shessh"];

console.log(test.map((element) => {
  return element.toUpperCase()
}));

console.log(test.forEach((element) => element.toUpperCase()));

console.log(test)
