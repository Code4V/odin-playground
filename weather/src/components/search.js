export default function Search() {
  const search = document.createElement('section');

  const searchForm = document.createElement('form');
  searchForm.classList.add('form');

  const searchInput = document.createElement('input');
  searchInput.type = 'input';
  searchInput.placeholder = 'Enter your a city name';
  searchInput.required = true;

  const searchSubmit = document.createElement('input');
  searchSubmit.type = 'submit';

  searchForm.append(searchInput, searchSubmit);

  search.addEventListener('submit', (ev) => {
    ev.preventDefault();
  });

  search.append(searchForm);

  return search;
}
