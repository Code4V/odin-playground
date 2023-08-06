import Header from './components/header';
import { Product } from './components/product';

const main = document.querySelector("#content");




main.insertAdjacentElement('afterbegin',Header());

console.log(Product())
main.appendChild(Product())
// main.innerHTML = "HELLO"