export default function Forecast ({date, tempIcon, temp, temp_f, mintemp, maxtemp}) {
  const Forecast = document.createElement('div');
  Forecast.classList.add('forecast');

  const dateContent = document.createElement('p');
  dateContent.classList.add('forecast__date');
  dateContent.textContent = date;

  const ForecastIconContainer = document.createElement('div');
  ForecastIconContainer.classList.add('forecast__icon');
  
  const ForecastIcon = document.createElement('img');
  ForecastIcon.src = tempIcon ?? '#';

  ForecastIconContainer.append(ForecastIcon);

  const ForecastFooter = document.createElement('div');
  ForecastFooter.classList.add('forecast__footer');

  const ForecastLow = document.createElement('span');
  ForecastLow.textContent = `${mintemp}`;

  const ForecastAve = document.createElement('span');
  ForecastAve.textContent = `${temp}`;

  const ForecastHigh = document.createElement('span');
  ForecastHigh.textContent = `${maxtemp}`;

  ForecastFooter.append(ForecastLow, ForecastAve, ForecastHigh)

  Forecast.append(dateContent, ForecastIconContainer, ForecastFooter);

  return Forecast;
}