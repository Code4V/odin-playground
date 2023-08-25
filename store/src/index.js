import Header from "./components/header";
import Product from "./components/product";
import Menu from "./components/menu";
import HeaderNavigation from "./components/header-navigation";
import BestSeller from "./components/best-seller";
import Footer from "./components/footer";

const main = document.querySelector("#content");

const container = document.createElement('div');
container.classList.add('main__body');

const headerNavigation = HeaderNavigation();
// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))

document.addEventListener("DOMContentLoaded", () => {
  main.appendChild(container);
  main.insertAdjacentElement("afterbegin", headerNavigation);
  container.appendChild(Header());
  container.appendChild(BestSeller());
  container.appendChild(Menu());
  container.appendChild(Footer());

  headerNavigation.childNodes[1].childNodes[0].childNodes.forEach(element => {
    element.addEventListener('click', () => {
      container.textContent  = '';

      switch (element.textContent.toUpperCase()){
        case 'HOME':
          container.appendChild(Header());
          break; 
        case 'MENU':
          container.appendChild(Header());
          container.appendChild(BestSeller());
          container.appendChild(Menu());
          container.appendChild(Footer());
          break;
        case 'CONTACT':
          container.appendChild(BestSeller()); 
          break;
        
      }

    })
  })
});


// main.innerHTML = "HELLO"
