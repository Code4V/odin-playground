import './style/index.sass';
import GetWeather from './operations/weatherFunctions';
import Header from './components/header';
import Weather from './components/weather';

const main = document.querySelector('#main');

main.append(Header())

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

try {
  const WeatherInfo = await GetWeather();

  console.table(WeatherInfo);
  
  // main.append(await Weather(WeatherInfo))

} catch (err) {
  console.log(err)
}