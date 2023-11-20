import Forecast from './forecast';

export default function ForecastList(forecasts = []) {
  const forecastList = document.createElement('div');
  forecastList.classList.add('forecast-list');
  forecastList.id = 'forecastList';

  if (forecasts.length !== 0) {
    const forecastHeader = document.createElement('h4');
    forecastHeader.classList.add('forecast-list__header');
    forecastHeader.textContent = '7-Day Forecast';

    forecastList.append(forecastHeader);
  }

  if (forecasts.length === 0) return forecastList;
  forecasts.forEach((day) => forecastList.append(Forecast(day)));
  return forecastList;
}
