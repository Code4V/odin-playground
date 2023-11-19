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

  const searchSubmit = document.createElement('button');
  searchSubmit.classList.add('form__submit');
  searchSubmit.type = 'submit';
  searchSubmit.innerHTML = `<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="800px" height="800px" viewBox="0 0 512 512"  xml:space="preserve">
<g>
	<path class="st0" d="M449.803,62.197C408.443,20.807,353.85-0.037,299.646-0.006C245.428-0.037,190.85,20.807,149.49,62.197
		C108.1,103.557,87.24,158.15,87.303,212.338c-0.047,37.859,10.359,75.766,30.547,109.359L15.021,424.525
		c-20.016,20.016-20.016,52.453,0,72.469c20,20.016,52.453,20.016,72.453,0L190.318,394.15
		c33.578,20.203,71.5,30.594,109.328,30.547c54.203,0.047,108.797-20.797,150.156-62.188
		c41.375-41.359,62.234-95.938,62.188-150.172C512.053,158.15,491.178,103.557,449.803,62.197z M391.818,304.541
		c-25.547,25.531-58.672,38.125-92.172,38.188c-33.5-0.063-66.609-12.656-92.188-38.188c-25.531-25.578-38.125-58.688-38.188-92.203
		c0.063-33.484,12.656-66.609,38.188-92.172c25.578-25.531,58.688-38.125,92.188-38.188c33.5,0.063,66.625,12.656,92.188,38.188
		c25.531,25.563,38.125,58.688,38.188,92.172C429.959,245.854,417.365,278.963,391.818,304.541z"/>
</g>
</svg>`;

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

    searchInput.value = '';
  });

  search.append(searchForm);

  return search;
}
