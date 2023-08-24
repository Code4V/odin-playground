import Header from "./components/header";
import Product from "./components/product";
import Menu from "./components/menu";
import HeaderNavigation from "./components/header-navigation";
import BestSeller from "./components/best-seller";
import Footer from "./components/footer";

const main = document.querySelector("#content");

// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))

document.addEventListener("DOMContentLoaded", () => {
  main.insertAdjacentElement("afterbegin", Header());
  main.insertAdjacentElement("afterbegin", HeaderNavigation());
  main.appendChild(BestSeller());
  main.appendChild(Menu());
  main.appendChild(Footer());
});

// main.innerHTML = "HELLO"
