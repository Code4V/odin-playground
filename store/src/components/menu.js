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
   
    let menuNavigation = Navigation(["All", "Main Course", "Appetizers", "Desserts", "Drinks", "Sides"], currentCategory);

    menuItems.insertAdjacentElement('beforebegin', menuNavigation);
    
    
    products.map(element => {
        if (element.productCategory.includes(currentCategory) || 
        currentCategory == null)
        menuItems.appendChild(Product(element));
    })
    
    
    menuNavigation.childNodes[0].childNodes.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active');
            
            console.log(menuItems);
            menuItems.textContent = '';



            products.map(product => {
                if (product.productCategory.includes(element.textContent) || 
                     element.textContent == 'All')
                menuItems.appendChild(Product(product));
            })
        })
    })

    return menu;
}


export default Menu;