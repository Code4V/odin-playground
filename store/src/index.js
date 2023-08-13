import Header from './components/header';
import Product from './components/product';
import Menu from './components/menu';
import Navigation from './components/navigation';
import BestSeller from './components/best-seller';

const main = document.querySelector("#content");


// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))


document.addEventListener('DOMContentLoaded', ()=>{
    main.insertAdjacentElement('afterbegin',Header());
    main.appendChild(BestSeller())
    main.appendChild(Menu())
})

// main.innerHTML = "HELLO"