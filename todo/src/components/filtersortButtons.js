import displayController from '../controllers/displayController';
import todoController from '../controllers/todoController';

const FilterSorter = () => {
  const filterSorterContainer = document.createElement('section');
  filterSorterContainer.classList.add('filter-sorter');

  const filterContainer = document.createElement('div');
  filterContainer.classList.add('filter-sorter__filters');

  const sortContainer = document.createElement('div');
  sortContainer.classList.add('filter-sorter__sorters');

  const sortbyText = document.createElement('span');
  sortbyText.classList.add('filter-sorter__sorters-label');
  sortbyText.textContent = 'Sort By:';

  const sortbyProject = document.createElement('button');
  sortbyProject.classList.add('filter-sorter__sorters-project');
  sortbyProject.type = 'button';
  sortbyProject.textContent = 'Project';

  const sortbyDate = document.createElement('button');
  sortbyDate.classList.add('filter-sorter__sorters-date');
  sortbyDate.type = 'button';
  sortbyDate.textContent = 'Date';

  sortContainer.append(sortbyText, sortbyProject, sortbyDate);

  filterSorterContainer.append(filterContainer, sortContainer);

  sortbyProject.onclick = () => {
    displayController.toggleProjectOrder();
    sortbyProject.classList.toggle('filter-sorter__sorters--active');

    displayController.displayTodoList();
    todoController.createTodoEvents();
  };

  sortbyDate.onclick = () => {
    displayController.toggleDateOrder();
    sortbyDate.classList.toggle('filter-sorter__sorters--active');

    displayController.displayTodoList();
    todoController.createTodoEvents();
  };

  return filterSorterContainer;
};

export default FilterSorter;
