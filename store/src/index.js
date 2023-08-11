import Header from './components/header';
import Product from './components/product';
import Menu from './components/menu';
import Navigation from './components/navigation';


const main = document.querySelector("#content");


main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))

main.insertAdjacentElement('afterbegin',Header());

document.addEventListener('DOMContentLoaded', ()=>{

    main.appendChild(Menu('Drinks'))

})

// main.innerHTML = "HELLO"