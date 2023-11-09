import Congrats from './components/congrats';
import ThisForm from './components/form';
import Header from './components/header';

const main = document.querySelector('#main');

main.append(Header(), ThisForm(), Congrats());
