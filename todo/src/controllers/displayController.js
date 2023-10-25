import TodoList from '../components/todoList';
import clearStorage, {
  getStorage,
  setStorage,
} from '../operations/storageOperations';
import {
  sortTodoBy,
  filterProjects,
  filterExpired,
} from '../operations/dataOperations';

class DisplayController {
  #sortbyProject = false;

  #removeExpired = true;

  #sortByDate = false;

  #currentData = [];

  constructor() {
    if (DisplayController.instance == null) {
      DisplayController.instance = this;
    }
  }

  displayTodoList = (todoData = []) => {
    let dataList = todoData;
    if (localStorage.length === 0) setStorage(dataList);
    if (
      this.#currentData.length === 0
      || this.#currentData.length !== localStorage.length
    ) this.#currentData = getStorage();

    if (this.#sortByDate) {
      this.#currentData = sortTodoBy(this.#currentData, {
        category: 'dueDate',
        isAscending: true,
      });
      
      clearStorage();
      setStorage(this.#currentData);
    }

    if (this.#removeExpired) {
      this.#currentData = filterExpired(this.#currentData);
    }

    dataList = this.#currentData;

    const projects = filterProjects(dataList);

    const mainTodoListContainer = document.querySelector('main');
    mainTodoListContainer.innerHTML = '';

    if (!this.#sortbyProject) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      clearStorage();

      if (!projects.projects.length) {
        mainTodoListContainer.appendChild(TodoList([]));
      }

      projects.filteredProject.forEach((element) => {
        const currentProj = Object.keys(element)[0];

        projects.projects.forEach((project, index) => {

          if (project === currentProj) {
            mainTodoListContainer.appendChild(
              TodoList(element[project], {
                projectName: [project],
              }),

            );

            setStorage(element[project]);
          }
        });
      });
    }

    this.#currentData = [];
  };

  updateCurrentData() {
    this.#currentData = getStorage();
  }

  toggleFilter() {
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
