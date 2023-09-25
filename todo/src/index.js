import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import displayController from "./controllers/displayController";
import Form from "./components/form";
import { addDays, format, parseISO, subDays, subHours } from "date-fns";

const main = document.querySelector("#content");

clearStorage();

document.addEventListener("DOMContentLoaded", async () => {
  const mainContainer = document.createElement("main");
  main.appendChild(Form());

  main.appendChild(mainContainer);

  displayController.applyFilter();
  displayController.displayList(data);

});

console.log(await (await fetch("https://reqres.in/api/users/")).json());

console.log(new Date("September-09-2023").getTime())
