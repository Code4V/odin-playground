import Header from './components/header';
import Product from './components/product';
import Menu from './components/menu';

const main = document.querySelector("#content");




main.insertAdjacentElement('afterbegin',Header());

main.appendChild(Menu('Drinks'))
// main.innerHTML = "HELLO"