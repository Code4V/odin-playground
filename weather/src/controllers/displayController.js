import GetWeather, { GetForecast } from '../operations/weatherFunctions';
import Weather from '../components/weather';
import ForecastList from '../components/forecastList';

class DisplayController {
  #main;

  constructor() {
    if (DisplayController.instance === null) {
      DisplayController.instance = this;
    }
  }

  async render() {
    // const currentPlace = 'Bristol';
    this.#main = document.querySelector('#main');
    const weatherTodayLocal = await GetWeather();
    const forecastLocal = await GetForecast();

    this.#main.append(
      Weather(weatherTodayLocal),
      ForecastList(forecastLocal.forecast),
    );
  }
}

const displayController = new DisplayController();
Object.freeze(displayController);

export default displayController;
