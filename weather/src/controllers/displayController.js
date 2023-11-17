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

  async render() {
    const weatherTodayLocal = await GetWeather();
    const forecastLocal = await GetForecast();

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
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
