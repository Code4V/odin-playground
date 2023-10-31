import TodoList from '../components/todoList';
import clearStorage, {
  getTodoStorage,
  setTodoStorage,
} from '../operations/storageOperations';

import {
  sortTodoBy,
  filterProjects,
  filterExpired,
} from '../operations/dataOperations';

class DisplayController {
  #sortByPriority = true;

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
    if (localStorage.length === 0) setTodoStorage(dataList);
    if (
      this.#currentData.length === 0
      || this.#currentData.length !== getTodoStorage().length
    ) this.#currentData = getTodoStorage();

    if (this.#sortByDate) this.#todoSorter('dueDate', true);
    else this.#todoSorter('dueDate', false);

    if (this.#sortByPriority) this.#todoSorter('priority', false);
    else this.#todoSorter('priority', true);

    if (this.#filterExpired) {
      this.#currentData = filterExpired(this.#currentData);
    }

    dataList = this.#currentData;

    const mainTodoListContainer = document.querySelector('main');
    mainTodoListContainer.innerHTML = '';

    if (!this.#sortbyProject) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      const projects = filterProjects(dataList);

      setTodoStorage(dataList);

      if (!projects.projects.length) {
        mainTodoListContainer.appendChild(TodoList([]));
      }

      projects.projects.forEach((projectName) => {
        mainTodoListContainer.appendChild(
          TodoList(projects.filteredProject[projectName], {
            projectName,
          }),
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

  updateCurrentData() {
    this.#currentData = getTodoStorage();
  }

  toggleProjectOrder() {
    this.#sortbyProject = !this.#sortbyProject;

    localStorage.setItem('isSortedByProject', this.#sortbyProject);
    return this;
  }

  toggleDateOrder() {
    this.#sortByDate = !this.#sortByDate;

    localStorage.setItem('isSortedByDate', this.#sortByDate);
    return this;
  }

  togglePriority() {
    this.#sortByPriority = !this.#sortByPriority;

    localStorage.setItem('isSortedByPriority', this.#sortByPriority);
    return this;
  }

  applyPreferences() {
    this.#sortbyProject = JSON.parse(localStorage.getItem('isSortedByProject'));
    this.#sortByDate = JSON.parse(localStorage.getItem('isSortedByDate'));
    this.#sortByPriority = JSON.parse(localStorage.getItem('isSortedByPriority'));
  }
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
