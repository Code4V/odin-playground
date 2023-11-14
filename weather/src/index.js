import './style/index.sass';
import GetWeather from './operations/weatherFunctions';
import Header from './components/header';

const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', async () => {
  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  try {
    const { location, current } = await GetWeather();

    console.table({location, current})

  } catch (err) {
    console.log(err)
  }

  main.append(Header())
})