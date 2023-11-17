export default function Weather({
  cityName, tempIcon, temp, feelslike, lastUpdated,
}) {
  const weatherWrapper = document.createElement('div');
  weatherWrapper.classList.add('weather');

  const weatherHeader = document.createElement('div');
  weatherHeader.classList.add('weather__header');

  const weatherTitle = document.createElement('h3');
  weatherTitle.textContent = cityName ?? 'Couldn\'t Get City';

  weatherHeader.append(weatherTitle);

  const weatherBody = document.createElement('div');
  weatherBody.classList.add('weather__body');

  const weatherIconContainer = document.createElement('div');
  weatherIconContainer.classList.add('weather__body-icon');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = tempIcon;
  weatherIcon.alt = 'weather condition alt';

  weatherIconContainer.append(weatherIcon);

  const weatherInfoContainer = document.createElement('div');
  weatherInfoContainer.classList.add('weather__body-info');

  const weatherTempContainer = document.createElement('div');

  const weatherTemperatureHeader = document.createElement('p');
  weatherTemperatureHeader.textContent = 'Temperature';

  const weatherTemperature = document.createElement('span');
  weatherTemperature.textContent = `${temp}°` ?? '0°';

  weatherTempContainer.append(weatherTemperature);

  weatherInfoContainer.append(weatherTempContainer);

  weatherBody.append(
    weatherInfoContainer,
    weatherIconContainer,
  );

  const weatherFooter = document.createElement('div');
  weatherFooter.classList.add('weather__footer');

  const weatherFeelsLike = document.createElement('p');
  weatherFeelsLike.textContent = `${feelslike}°` ?? '0°';

  const weatherLastUpdate = document.createElement('p');
  weatherLastUpdate.textContent = lastUpdated;

  weatherFooter.append(weatherFeelsLike, weatherLastUpdate);

  weatherWrapper.append(
    weatherBody,
    weatherHeader,
    weatherFooter,
  );

  return weatherWrapper;
}
