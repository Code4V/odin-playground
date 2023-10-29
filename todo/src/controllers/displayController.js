import TodoList from "../components/todoList";
import clearStorage, {
  getStorage,
  setStorage,
} from "../operations/storageOperations";

import {
  getStorage as EXPERIMENTAL_GETSTORAGE,
  setStorage as EXPERIMENTAL_SETSTORAGE,
} from "../operations/EXPERIMENTALstorageOperations";

import {
  sortTodoBy,
  filterProjects,
  filterExpired,
} from "../operations/dataOperations";

class DisplayController {
  #sortbyProject = false;
  #sortByDate = false;

  #filterExpired = false;

  #currentData = [];

  constructor() {
    if (DisplayController.instance == null) {
      DisplayController.instance = this;
    }
  }

  displayTodoList = (todoData = []) => {
    let dataList = todoData;
    if (localStorage.length === 0) EXPERIMENTAL_SETSTORAGE(dataList);
    if (
      this.#currentData.length === 0 ||
      this.#currentData.length !== EXPERIMENTAL_GETSTORAGE().length
    )
      this.#currentData = EXPERIMENTAL_GETSTORAGE();

    if (this.#sortByDate) {
      this.#currentData = sortTodoBy(this.#currentData, {
        category: "dueDate",
        isAscending: true,
      });

      clearStorage();
      EXPERIMENTAL_SETSTORAGE(this.#currentData);
    }

    if (this.#filterExpired) {
      this.#currentData = filterExpired(this.#currentData);
    }

    dataList = this.#currentData;

    const mainTodoListContainer = document.querySelector("main");
    mainTodoListContainer.innerHTML = "";
    
    if (!this.#sortbyProject) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    
    } else {

      const projects = filterProjects(dataList);
      
      if (!projects.projects.length) {
        mainTodoListContainer.appendChild(TodoList([]));
      }
      
      projects.projects.forEach((projectName) => {
        mainTodoListContainer.appendChild(
          TodoList(projects.filteredProject[projectName], {
            projectName: projectName,
          })
          );

        });
    }

    // this.#currentData = [];
  };

  updateCurrentData() {
    this.#currentData = getStorage();
  }

  toggleProjectOrder() {
    this.#sortbyProject = !this.#sortbyProject;

    return this;
  }

  toggleDateOrder() {
    this.#sortByDate = !this.#sortByDate;

    return this;
  }
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
