import data from "./data/todo.json";
import clearStorage, { setStorage } from "./operations/storageOperations";
import displayController from "./controllers/displayController";
import Form from "./components/form";
import Background from "./assets/TodoBackground.webp"
import Alt from "./assets/Alt.jpg"
import { addDays, format, parseISO, subDays, subHours } from "date-fns";

const main = document.querySelector("#content");

clearStorage();

document.addEventListener("DOMContentLoaded", async () => {
  const mainContainer = document.createElement("main");
  main.appendChild(Form());

  const backgroundImage = new Image(1920, 1080);
  backgroundImage.classList.add("background")
  backgroundImage.src = Alt;

  main.appendChild(backgroundImage)

  main.appendChild(mainContainer);

  displayController.toggleFilter();
  displayController.displayList(data);

});

// console.log(await (await fetch("https://reqres.in/api/users/")).json());

// console.log(new Date("September-09-2023").getTime())
