import { format } from "date-fns";
import TodoList from "../components/todoList";
import clearStorage, {
  getStorage,
  setStorage,
} from "../operations/storageOperations";
import parseISO from "date-fns/parseISO";
import { sortByDate, filterProjects } from "../operations/dataOperations";

class DisplayController {
  #isFiltered = false;
  #sortByDate = false;

  constructor() {
    if (DisplayController.instance == null) {
      DisplayController.instance = this;
    }

    return DisplayController.instance;
  }

  displayList = (dataList) => {
    // if (localStorage.length != 0) dataList = getStorage();
    if (localStorage.length == 0) setStorage(dataList);

    if (this.#sortByDate) {
      dataList = sortByDate(dataList);
      clearStorage();
      setStorage(dataList);
    }

    let projects = filterProjects(dataList);

    const mainTodoListContainer = document.querySelector("main");
    mainTodoListContainer.innerHTML = "";

    if (!this.#isFiltered) {
      mainTodoListContainer.appendChild(TodoList(dataList));
    } else {
      clearStorage();
      if (!projects["projects"].length)
        mainTodoListContainer.appendChild(TodoList([]));

      projects["filteredProject"].forEach((element) => {
        
        let currentProj = Object.keys(element)[0];
        projects["projects"].forEach((project, index) => {
          
          var duration = (index * 500) + 500 ;
          duration = (duration > 2500) ? 2500 : duration;

          if (project == currentProj) {
            console.log(project);

            mainTodoListContainer.appendChild(
              TodoList(element[project], { projectName: [project], duration: `${[duration]}ms`})
            );

            setStorage(element[project]);
          } else return;
        });
      });
    }

    return this;
  };

  toggleFilter() {
    this.#isFiltered = !this.#isFiltered ? true : false;
    
    return this;
  }


}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
