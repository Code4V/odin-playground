import displayController from '../controllers/displayController';

export default function Search() {
  const search = document.createElement('section');

  const searchForm = document.createElement('form');
  searchForm.classList.add('form');

  const searchInput = document.createElement('input');
  searchInput.classList.add('form__search');
  searchInput.type = 'input';
  searchInput.placeholder = 'Enter your a city name';
  searchInput.required = true;

  const searchSubmit = document.createElement('input');
  searchSubmit.classList.add('form__submit');
  searchSubmit.type = 'submit';

  searchForm.append(searchInput, searchSubmit);

  search.addEventListener('submit', (ev) => {
    ev.preventDefault();

    displayController.refresh();
  });

  search.append(searchForm);

  return search;
}
