import Product from './product';
import products from './../data/products';
import Navigation from './navigation';

const Menu = (currentCategory) =>
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

    // const menuNavigation = document.createElement('nav');
    
    menu.appendChild(menuTitle);
    
    menuTitle.insertAdjacentElement('afterend', menuItems)
    
    menuItems.insertAdjacentElement('beforebegin', Navigation(["All", "Main Course", "Appetizers", "Desserts", "Drinks", "Sides"], currentCategory))
    
    products.map(element => {
        if (element.productCategory.includes(currentCategory) || 
            currentCategory == null)
        menuItems.appendChild(Product(element));
    })

    return menu;
}


export default Menu;