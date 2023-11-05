import displayController from './controllers/displayController';
import todoController from './controllers/todoController';
import Form from './components/form';
import NavBar from './components/navbar';
import FilterSorter from './components/filtersortButtons';

const main = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.createElement('main');
  main.append(NavBar(), Form(), FilterSorter(), mainContainer);

  displayController.displayTodoList();
  todoController.createTodoEvents();
});
