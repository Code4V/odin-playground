export default function Forecast({
  date, tempIcon, temp, mintemp, maxtemp,
}) {
  const forecast = document.createElement('div');
  forecast.classList.add('forecast');

  const dateContent = document.createElement('span');
  dateContent.classList.add('forecast__date');
  dateContent.textContent = date;

  const forecastInfoContainer = document.createElement('div');
  forecastInfoContainer.classList.add('forecast__info');

  const forecastIconContainer = document.createElement('div');
  forecastIconContainer.classList.add('forecast__icon');

  const forecastIcon = document.createElement('img');
  forecastIcon.src = tempIcon ?? '#';

  forecastIconContainer.append(forecastIcon);

  const forecastFooter = document.createElement('div');
  forecastFooter.classList.add('forecast__footer');

  const forecastLow = document.createElement('span');
  forecastLow.textContent = `${mintemp}°`;

  const forecastAve = document.createElement('span');
  forecastAve.textContent = `${temp}°`;

  const forecastHigh = document.createElement('span');
  forecastHigh.textContent = `${maxtemp}°`;

  forecastFooter.append(forecastLow, forecastAve, forecastHigh);

  forecast.append(forecastIconContainer, forecastFooter, dateContent);

  return forecast;
}
