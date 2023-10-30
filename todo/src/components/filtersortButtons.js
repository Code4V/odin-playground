import displayController from "../controllers/displayController";
import todoController from "../controllers/todoController";

function addOnClick(actionButton) {
  console.log(actionButton)
  actionButton.onclick = () => {
    switch (actionButton.textContent) {
      case 'Project':
        displayController.toggleProjectOrder();
        break;

      case 'Date':
        displayController.toggleDateOrder();
        break;

      case 'Priority':
        displayController.togglePriority();
        break;

      default:
        displayController.toggleProjectOrder();
        break;
    }
    actionButton.classList.toggle("filter-sorter__sorters--active");

    displayController.updateCurrentData();
    displayController.displayTodoList();
    todoController.createTodoEvents();
  };
}

const FilterSorter = () => {
  displayController.applyPreferences();

  const filterSorterContainer = document.createElement("section");
  filterSorterContainer.classList.add("filter-sorter");

  const filterContainer = document.createElement("div");
  filterContainer.classList.add("filter-sorter__filters");

  const sortContainer = document.createElement("div");
  sortContainer.classList.add("filter-sorter__sorters");

  const sortbyText = document.createElement("span");
  sortbyText.classList.add("filter-sorter__sorters-label");
  sortbyText.textContent = "Sort By:";

  const sortbyProject = document.createElement("button");
  if (displayController.isSortedByProject)
    sortbyProject.classList.add("filter-sorter__sorters--active");
  sortbyProject.classList.add("filter-sorter__sorters-project");
  sortbyProject.type = "button";
  sortbyProject.textContent = "Project";

  const sortbyDate = document.createElement("button");
  if (displayController.isSortedByDate)
    sortbyDate.classList.add("filter-sorter__sorters--active");
  sortbyDate.classList.add("filter-sorter__sorters-date");
  sortbyDate.type = "button";
  sortbyDate.textContent = "Date";

  const sortbyPriority = document.createElement("button");
  if (displayController.isSortedByPriority)
    sortbyPriority.classList.add("filter-sorter__sorters--active");
  sortbyPriority.classList.add("filter-sorter__sorters-date");
  sortbyPriority.type = "button";
  sortbyPriority.textContent = "Priority";

  sortContainer.append(sortbyText, sortbyPriority, sortbyProject, sortbyDate);

  filterSorterContainer.append(filterContainer, sortContainer);

  addOnClick(sortbyProject);
  addOnClick(sortbyDate);
  addOnClick(sortbyPriority);

  return filterSorterContainer;
};

export default FilterSorter;
