import './style/index.sass';
import GetWeather, { GetForecast } from './operations/weatherFunctions';
import Header from './components/header';
import Weather from './components/weather';
import Search from './components/search';
import Forecast from './components/forecast';

const main = document.querySelector('#main');

main.append(Header())

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

try {
  const WeatherInfo = await GetWeather();
  const WeatherForecast = await GetForecast();
  
  main.append(await Weather(WeatherInfo), Search())
  
  WeatherForecast.forecast.forEach(day => {
    main.append(Forecast(day));
  });

} catch (err) {
  console.log(err)
}