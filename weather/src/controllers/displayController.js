import GetWeather, { GetForecast } from '../operations/weatherFunctions';
import Weather from '../components/weather';
import ForecastList from '../components/forecastList';

class DisplayController {
  #main = document.querySelector('#main');

  #weatherInfo = document.createElement('div');

  constructor() {
    if (DisplayController.instance === null) {
      DisplayController.instance = this;
    }
  }

  async renderWeather() {
    const weatherTodayLocal = await GetWeather();
    const forecastLocal = await GetForecast();

    console.log(weatherTodayLocal);
    this.#weatherInfo.classList.add('weather-forecast');
    this.#weatherInfo.append(
      Weather(weatherTodayLocal),
      ForecastList(forecastLocal.forecast),
    );

    this.#main.append(
      this.#weatherInfo,
    );
  }

  #removeChildNodes(parentNode) {
    if (parentNode.childNodes.length !== 0) {
      parentNode.childNodes[0].remove();
      this.#removeChildNodes(parentNode);
    }
  }

  refresh() {
    this.#removeChildNodes(this.#weatherInfo);
    return this.render();
  }

  async renderWeatherForecast(place) {
    this.#removeChildNodes(this.#weatherInfo);
    const reqWeather = await GetWeather(place);
    const reqForecast = await GetForecast(place);

    this.#weatherInfo.append(
      Weather(reqWeather),
      ForecastList(reqForecast.forecast),
    );
  }
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
