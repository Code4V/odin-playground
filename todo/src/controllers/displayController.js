import TodoList from "../components/todoList";
import clearStorage, {
  getTodoStorage,
  setTodoStorage,
} from "../operations/storageOperations";

import {
  sortTodoBy,
  sortByProject,
  filterBy,
} from "../operations/dataOperations";

class DisplayController {
  #sortByPriority = true;

  #sortbyProject = false;

  #sortByDate = false;

  #filterExpired = false;

  #filterComplete = false;

  #currentData = [];

  constructor() {
    if (DisplayController.instance == null) {
      DisplayController.instance = this;
    }
  }

  displayTodoList = (todoData = []) => {
    let dataList = todoData;
    if (localStorage.length === 0) setTodoStorage(dataList);
    if (
      this.#currentData.length === 0 ||
      this.#currentData.length !== getTodoStorage().length
    )
      this.#currentData = getTodoStorage();

    if (this.#sortByDate) this.#todoSorter("dueDate", true);
    else this.#todoSorter("dueDate", false);

    if (this.#sortByPriority) this.#todoSorter("priority", false);
    else this.#todoSorter("priority", true);

    dataList = this.#currentData;

    if (this.#filterComplete) {
      dataList = filterBy(dataList, { dataKey: "isComplete", isTrue: true });
    } else dataList = filterBy(dataList, { dataKey: "isComplete" });

    if (this.#filterExpired) {
      dataList = this.#currentData;
      dataList = filterBy(dataList, { dataKey: "dueDate", isDate: true });
    }
    console.log(dataList);

    const mainTodoListContainer = document.querySelector("main");
    mainTodoListContainer.innerHTML = "";

    if (!this.#sortbyProject) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      const projects = sortByProject(dataList);

      if (!Object.keys(projects).length) {
        mainTodoListContainer.appendChild(TodoList([]));
      }

      Object.keys(projects).forEach((projectName) => {
        mainTodoListContainer.appendChild(
          TodoList(projects[projectName], { projectName })
        );
      });
    }
  };

  #todoSorter(sortBy, isAscending = true) {
    this.#currentData = sortTodoBy(this.#currentData, {
      category: sortBy,
      isAscending,
    });

    setTodoStorage(this.#currentData);
  }

  get isSortedByProject() {
    return this.#sortbyProject;
  }

  get isSortedByDate() {
    return this.#sortByDate;
  }

  get isSortedByPriority() {
    return this.#sortByPriority;
  }

  get isFilteredByExpired() {
    return this.#filterExpired;
  }

  get isFilteredByComplete() {
    return this.#filterComplete;
  }

  updateCurrentData() {
    this.#currentData = getTodoStorage();
  }

  toggleProjectOrder() {
    this.#sortbyProject = !this.#sortbyProject;

    localStorage.setItem("isSortedByProject", this.#sortbyProject);
    return this;
  }

  toggleDateOrder() {
    this.#sortByDate = !this.#sortByDate;

    localStorage.setItem("isSortedByDate", this.#sortByDate);
    return this;
  }

  togglePriority() {
    this.#sortByPriority = !this.#sortByPriority;

    localStorage.setItem("isSortedByPriority", this.#sortByPriority);
    return this;
  }

  toggleExpired() {
    this.#filterExpired = !this.#filterExpired;

    localStorage.setItem("isFilteredByExpired", this.#filterExpired);
    return this;
  }

  toggleComplete() {
    this.#filterComplete = !this.#filterComplete;

    localStorage.setItem("isFilteredByComplete", this.#filterComplete);
    return this;
  }

  applyPreferences() {
    this.#sortbyProject = JSON.parse(localStorage.getItem("isSortedByProject"));
    this.#sortByDate = JSON.parse(localStorage.getItem("isSortedByDate"));
    this.#sortByPriority = JSON.parse(
      localStorage.getItem("isSortedByPriority")
    );
    this.#filterExpired = JSON.parse(
      localStorage.getItem("isFilteredByExpired")
    );
    this.#filterComplete = JSON.parse(
      localStorage.getItem("isFilteredByComplete")
    );
  }
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
