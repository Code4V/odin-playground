import TodoList from "../components/todoList";
import clearStorage, {
  getStorage,
  setStorage,
} from "../operations/storageOperations";
import { filterProjects } from "../operations/todoOperations";

const displayList = (dataList, filtered = true) => {
  // if (localStorage.length != 0) dataList = getStorage();
  if (localStorage.length == 0) setStorage(dataList);

  let projects = filterProjects(dataList);

  const mainTodoListContainer = document.querySelector("main");
  mainTodoListContainer.innerHTML = "";

  if (!filtered) {
    mainTodoListContainer.appendChild(TodoList(dataList));
    return;
  } else {
    clearStorage();
    projects["filteredProject"].forEach((element) => {
      let currentProj = Object.keys(element)[0];
      projects["projects"].forEach((project) => {
        if (project == currentProj) {
          mainTodoListContainer.appendChild(TodoList(element[project]));
          setStorage(element[project]);
        } else return;
      });
    });
  }
};

class DisplayList {
  #isFiltered = false; 

  constructor() {
    if (DisplayList.instance == null) {
      DisplayList.instance = this;
    }

    return DisplayList.instance;
  }

  displayList = (dataList) => {
    // if (localStorage.length != 0) dataList = getStorage();
    if (localStorage.length == 0) setStorage(dataList);

    let projects = filterProjects(dataList);

    const mainTodoListContainer = document.querySelector("main");
    mainTodoListContainer.innerHTML = "";

    if (!this.#isFiltered) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      clearStorage();
      projects["filteredProject"].forEach((element) => {
        let currentProj = Object.keys(element)[0];
        projects["projects"].forEach((project) => {
          if (project == currentProj) {
            mainTodoListContainer.appendChild(TodoList(element[project]));
            setStorage(element[project]);
          } else return;
        });
      });
    }

    return this;
  };

  applyFilter() {
    this.#isFiltered = true;
    return this;
  }

  removeFilter() {
    this.#isFiltered = false;
    return this;
  }
}

const displayController = new DisplayList();
Object.freeze(displayController);

export { displayList, displayController };
