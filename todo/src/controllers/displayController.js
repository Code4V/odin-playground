import TodoList from '../components/todoList';
import clearStorage, {
  getStorage,
  setStorage,
} from '../operations/storageOperations';
import { sortByDate, filterProjects } from '../operations/dataOperations';

class DisplayController {
  #isFiltered = false;

  #sortByDate = false;

  #currentData = [];

  constructor() {
    if (DisplayController.instance == null) {
      DisplayController.instance = this;
    }
  }

  displayList = (dataList = []) => {
    if (localStorage.length === 0) setStorage(dataList);
    // this.#currentData = getStorage();

    if (this.#currentData.length !== localStorage.length) {
      this.#currentData = getStorage();
    }

    if (dataList.length !== 0) this.#currentData = dataList;

    if (localStorage.length !== 0) dataList = getStorage();
    else {
      dataList = this.#currentData;
    }

    if (this.#currentData.length === 0) this.#currentData = dataList;

    if (this.#sortByDate) {
      this.#currentData = sortByDate(dataList, { category: 'dueDate' });
      clearStorage();
      setStorage(dataList);
    }

    const projects = filterProjects(dataList);

    const mainTodoListContainer = document.querySelector('main');
    mainTodoListContainer.innerHTML = '';

    if (!this.#isFiltered) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      clearStorage();
      if (!projects.projects.length) {
        mainTodoListContainer.appendChild(TodoList([]));
      }

      projects.filteredProject.forEach((element) => {
        const currentProj = Object.keys(element)[0];
        projects.projects.forEach((project, index) => {
          let duration = index * 500 + 500;
          duration = duration > 2500 ? 2500 : duration;

          if (project === currentProj) {
            mainTodoListContainer.appendChild(
              TodoList(element[project], {
                projectName: [project],
                duration: `${[duration]}ms`,
              }),
            );

            setStorage(element[project]);
          }
        });
      });
    }
  };

  toggleFilter() {
    this.#isFiltered = !this.#isFiltered;

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
