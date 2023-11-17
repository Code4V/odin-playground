import './style/index.sass';
import Header from './components/header';
import displayController from './controllers/displayController';

const main = document.querySelector('#main');

main.append(Header());

try {
  displayController.render();
} catch (err) {
  console.log(err);
}
