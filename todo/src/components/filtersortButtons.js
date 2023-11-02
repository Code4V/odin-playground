import displayController from '../controllers/displayController';
import todoController from '../controllers/todoController';

function addOnClick(...actionButton) {
  return new Promise((resolve, reject) => {
    if (typeof actionButton !== 'object') reject(new Error('Must be type of Object'));

    if (actionButton[0].constructor.name !== 'HTMLButtonElement') reject(new Error('Object must be an HTML Button Element'));

    actionButton.forEach((element) => {
      element.onclick = () => {
        switch (element.textContent) {
          case 'Expired':
            displayController.toggleExpired();
            break;

          case 'Completed':
            displayController.toggleComplete();
            break;

          case 'Incomplete':
            displayController.toggleIncomplete();
            break;

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
        
        if(element.parentNode.classList[0] === 'filter-sorter__sorters')
          element.classList.toggle('filter-sorter__sorters--active');
        else
          element.classList.toggle('filter-sorter__filters--active')

        displayController.updateCurrentData();
        displayController.displayTodoList();
        todoController.createTodoEvents();
      };
    });

    resolve('Onclick successfully Added!');
  });
}

const FilterSorter = () => {
  displayController.applyPreferences();

  const filterSorterContainer = document.createElement('section');
  filterSorterContainer.classList.add('filter-sorter');

  const filterContainer = document.createElement('div');
  filterContainer.classList.add('filter-sorter__filters');

  const filterbyText = document.createElement('span');
  filterbyText.classList.add('filter-sorter__filters-label');
  filterbyText.textContent = 'Filter By:';

  const filterbyExpired = document.createElement('button');
  if (displayController.isFilteredByExpired) filterbyExpired.classList.add('filter-sorter__filters--active');
  filterbyExpired.classList.add('filter-sorter__filters-expired');
  filterbyExpired.textContent = 'Expired';

  const filterbyComplete = document.createElement('button');
  if (displayController.isFilteredByComplete) filterbyComplete.classList.add('filter-sorter__filters--active');
  filterbyComplete.classList.add('filter-sorter__filters-complete');
  filterbyComplete.textContent = 'Completed';

  const filterbyIncomplete = document.createElement('button');
  if (displayController.isFilteredByIncomplete) filterbyIncomplete.classList.add('filter-sorter__filters--active');
  filterbyIncomplete.classList.add('filter-sorter__filters-incomplete');
  filterbyIncomplete.textContent = 'Incomplete';

  filterContainer.append(
    filterbyText,
    filterbyExpired,
    filterbyComplete,
    filterbyIncomplete,
  );

  const sortContainer = document.createElement('div');
  sortContainer.classList.add('filter-sorter__sorters');

  const sortbyText = document.createElement('span');
  sortbyText.classList.add('filter-sorter__sorters-label');
  sortbyText.textContent = 'Sort By:';

  const sortbyProject = document.createElement('button');
  if (displayController.isSortedByProject) sortbyProject.classList.add('filter-sorter__sorters--active');
  sortbyProject.classList.add('filter-sorter__sorters-project');
  sortbyProject.type = 'button';
  sortbyProject.textContent = 'Project';

  const sortbyDate = document.createElement('button');
  if (displayController.isSortedByDate) sortbyDate.classList.add('filter-sorter__sorters--active');
  sortbyDate.classList.add('filter-sorter__sorters-date');
  sortbyDate.type = 'button';
  sortbyDate.textContent = 'Date';

  const sortbyPriority = document.createElement('button');
  if (displayController.isSortedByPriority) sortbyPriority.classList.add('filter-sorter__sorters--active');
  sortbyPriority.classList.add('filter-sorter__sorters-priority');
  sortbyPriority.type = 'button';
  sortbyPriority.textContent = 'Priority';

  sortContainer.append(sortbyText, sortbyPriority, sortbyProject, sortbyDate);

  filterSorterContainer.append(filterContainer, sortContainer);

  addOnClick(
    filterbyExpired,
    filterbyComplete,
    filterbyIncomplete,
    sortbyProject,
    sortbyDate,
    sortbyPriority,
  );
  // addOnClick(sortbyDate);
  // addOnClick(sortbyPriority);

  return filterSorterContainer;
};

export default FilterSorter;
