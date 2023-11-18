import displayController from '../controllers/displayController';

export default function Search() {
  const search = document.createElement('section');

  const searchForm = document.createElement('form');
  searchForm.classList.add('form');

  const searchInput = document.createElement('input');
  searchInput.classList.add('form__search');
  searchInput.type = 'input';
  searchInput.minLength = 3;
  searchInput.placeholder = 'Enter your a city name';
  searchInput.required = true;

  const searchSubmit = document.createElement('input');
  searchSubmit.classList.add('form__submit');
  searchSubmit.type = 'submit';

  searchForm.append(searchInput, searchSubmit);
  searchInput.addEventListener('focusout', () => {
    if (!searchInput.validity.valid) searchInput.setCustomValidity('Please Enter a City!');
    else searchInput.setCustomValidity('');
  });

  searchSubmit.addEventListener('click', () => {
    const regexNumber = /\d+/g;
    if (regexNumber.test(searchInput.value)) searchInput.setCustomValidity('City must not contain a Number');
    else searchInput.setCustomValidity('');
  });

  search.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if (searchInput.validity.valid) displayController.renderWeatherForecast(searchInput.value);
  });

  search.append(searchForm);

  return search;
}
