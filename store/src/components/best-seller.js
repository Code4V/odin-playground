import Product from "./product";
import products from "./../data/products";

const BestSeller = () =>
{
    const bestseller = document.createElement('section');
    bestseller.setAttribute('class', 'best-seller');

    const bestsellerTitle = document.createElement('div');
    bestsellerTitle.setAttribute('class', 'best-seller__title');

    const title = document.createElement('h3');
    title.textContent = "BEST SELLER";

    bestsellerTitle.appendChild(title);

    let bestsellerProduct = Product(products[0])
    bestsellerProduct.classList.add('best-seller__product')

    let productInfoChildren = bestsellerProduct.children[1].childNodes;
    bestsellerProduct.children[1].classList.add('best-seller__product-info', 
                                                'best-seller__product-info--centered');

    bestsellerProduct.children[1].children[3].childNodes.forEach(element => {
        // console.log(element)
        if(element.className === "product__info-category")
        {
            element.classList.add('best-seller__product-category')
        }
    });



    bestsellerProduct.children[1].childNodes[productInfoChildren.length - 1].classList.add('best-seller__product-action')
    console.log(bestsellerProduct)

    bestseller.appendChild(bestsellerTitle);

    bestsellerTitle.insertAdjacentElement('afterend', bestsellerProduct)

    return bestseller;
}

export default BestSeller;