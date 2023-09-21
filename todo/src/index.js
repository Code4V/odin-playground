import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import { displayList } from "./controllers/displayController";
import Form from "./components/form";
import TodoList from "./components/todoList";

const main = document.querySelector('#content');

clearStorage();



document.addEventListener("DOMContentLoaded", async () => 
{
  const mainContainer = document.createElement("main");
  main.appendChild(Form())
  
  
  main.appendChild(mainContainer);
  
  displayList(data);
})


