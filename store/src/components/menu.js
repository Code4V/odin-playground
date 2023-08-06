import Product from './product';
import products from './../data/products';

const Menu = () =>
{
    const menu = document.createElement('section');
    menu.setAttribute('class', 'menu');

    const menuItems = document.createElement('div');
    menuItems.setAttribute('class', 'menu__items');

    const menuTitle = document.createElement('div');
    menuTitle.setAttribute('class', 'menu__title');

    const title = document.createElement('h3');
    title.textContent = 'MENU';

    menuTitle.appendChild(title);

    const menuNavigation = document.createElement('nav');
    

    menu.appendChild(menuTitle);
    menuTitle.insertAdjacentElement('afterend', menuItems)

    Object.entries(products).forEach(element => {
        menuItems.appendChild(Product(element[1].productName, element[1].productDescription));
    })

    return menu;
}


export default Menu;