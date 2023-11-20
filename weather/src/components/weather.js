import { format } from 'date-fns';

export default function Weather({
  cityName, tempIcon, temp, feelslike, lastUpdated, message,
}) {
  const weatherWrapper = document.createElement('div');
  weatherWrapper.classList.add('weather');
  weatherWrapper.id = 'weather';

  if (message !== undefined) {
    const weatherErrorHolder = document.createElement('h3');
    weatherErrorHolder.classList.add('weather__header');
    weatherErrorHolder.textContent = message;
    weatherWrapper.append(weatherErrorHolder);
    return weatherWrapper;
  }

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

  const weatherFeelsLikeContainer = document.createElement('div');

  const weatherFeelsLikeIcon = document.createElement('div');
  weatherFeelsLikeIcon.innerHTML = `
  <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12H17M8 8.5C8 8.5 9 9 10 9C11.5 9 12.5 8 14 8C15 8 16 8.5 16 8.5M8 15.5C8 15.5 9 16 10 16C11.5 16 12.5 15 14 15C15 15 16 15.5 16 15.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  `;

  const weatherFeelsLike = document.createElement('p');
  weatherFeelsLike.textContent = `${feelslike}°` ?? '0°';

  weatherFeelsLikeContainer.append(
    weatherFeelsLikeIcon,
    weatherFeelsLike,
  );

  const weatherLastUpdate = document.createElement('p');
  weatherLastUpdate.textContent = format(new Date(lastUpdated), 'yyyy-dd-mm');

  weatherFooter.append(weatherFeelsLikeContainer, weatherLastUpdate);

  weatherWrapper.append(
    weatherBody,
    weatherHeader,
    weatherFooter,
  );

  return weatherWrapper;
}
