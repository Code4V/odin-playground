import './style/index.sass';
import Header from './components/header';
import displayController from './controllers/displayController';
import Search from './components/search';

const main = document.querySelector('#main');

main.append(Header(), Search());

try {
  displayController.renderWeather();
} catch (err) {
  console.log(err);
}
