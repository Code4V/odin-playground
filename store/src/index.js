import Header from "./components/header";
import AboutUs from "./components/about-us";
import Menu from "./components/menu";
import HeaderNavigation from "./components/header-navigation";
import BestSeller from "./components/best-seller";
import Footer from "./components/footer";
import Contact from "./components/contact";

const main = document.querySelector("#content");

const container = document.createElement("div");
container.classList.add("main__body");

const headerNavigation = HeaderNavigation();
// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))

document.addEventListener("DOMContentLoaded", () => {
  main.appendChild(container);
  main.insertAdjacentElement("afterbegin", headerNavigation);
  container.appendChild(Header());
  container.appendChild(AboutUs());
  main.appendChild(Footer());

  headerNavigation.childNodes[1].childNodes[0].childNodes.forEach((element) => {
    element.addEventListener("click", () => {
      container.textContent = "";

      switch (element.textContent.toUpperCase()) {
        case "HOME":
          container.appendChild(Header());
          container.appendChild(AboutUs());
          break;
        case "MENU":
          container.appendChild(Header());
          container.appendChild(BestSeller());
          container.appendChild(Menu());
          break;
        case "CONTACT":
          container.appendChild(Header());
          container.appendChild(Contact());
          break;
      }
    });
  });
});

// main.innerHTML = "HELLO"
