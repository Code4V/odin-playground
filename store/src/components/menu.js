import Product from "./product";
import products from "./../data/products";
import Navigation from "./navigation";
import NotFound from "./../assets/NotFound.png";

const Menu = (currentCategory) => {
  const menu = document.createElement("section");
  menu.setAttribute("class", "menu");

  const menuItems = document.createElement("div");
  menuItems.setAttribute("class", "menu__items");

  const menuNotFound = new Image();
  menuNotFound.src = NotFound;

  const menuEmpty = document.createElement("p");
  menuEmpty.setAttribute(
    "class",
    "menu__items-content menu__items-content--empty"
  );
  menuEmpty.textContent =
    "Oops! Looks like the high seas took these part of the menu!";

  const menuTitle = document.createElement("div");
  menuTitle.setAttribute("class", "menu__title");

  const title = document.createElement("h3");
  title.textContent = "MENU";

  menuTitle.appendChild(title);

  // const menuNavigation = document.createElement('nav');

  menu.appendChild(menuTitle);

  menuTitle.insertAdjacentElement("afterend", menuItems);

  let menuNavigation = Navigation(
    ["All", "Main Course", "Appetizers", "Desserts", "Drinks", "Sides"],
    currentCategory
  );

  menuItems.insertAdjacentElement("beforebegin", menuNavigation);

  products.map((element) => {
    if (
      element.productCategory.includes(currentCategory) ||
      currentCategory == null
    )
      menuItems.appendChild(Product(element));
  });

  menuNavigation.childNodes[0].childNodes.forEach((element) => {
    element.addEventListener("click", () => {

      menuItems.textContent = "";
      let isEmpty = true;
      products.map((product) => {
        if (
          product.productCategory.includes(element.textContent) ||
          element.textContent == "All"
        ) {
          menuItems.appendChild(Product(product));
          isEmpty = false;
        }
      });

      if (isEmpty) {
        menuItems.appendChild(menuNotFound);
        menuItems.appendChild(menuEmpty);
      }
    });
  });

  return menu;
};

export default Menu;
