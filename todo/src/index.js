import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import { displayList } from "./controllers/displayController";
import Form from "./components/form";
import TodoList from "./components/todoList";

const main = document.querySelector('#content');

clearStorage();
setStorage(data);

document.addEventListener("DOMContentLoaded", () => 
{
  const mainContainer = document.createElement("main");
  main.appendChild(mainContainer);

  displayList(TodoList(data));
  // main.appendChild(TodoList(data));
  main.appendChild(Form())
})


