const Product = (item) =>
{
    const product = document.createElement('div');
    product.setAttribute('class', 'product');
    product.setAttribute('id', `${item.productID}`)

    const productImage = document.createElement('div');
    productImage.setAttribute('class', 'product__image');

    const image = document.createElement('img');
    image.setAttribute('src', 'https://picsum.photos/id/677/250');
    image.setAttribute('alt', 'testing image');
    
    productImage.appendChild(image);

    const productInfo = document.createElement('div');
    productInfo.setAttribute('class', 'product__info');
    
    const infoTitle = document.createElement('span');
    infoTitle.setAttribute('class', 'product__info-title');
    infoTitle.textContent = item.productName;

    const infoDescription = document.createElement('p');
    infoDescription.setAttribute('class', 'product__info-description');
    infoDescription.textContent = item.productDescription;

    const infoPrice = document.createElement('p');
    infoPrice.setAttribute('class', 'product__info-price');
    infoPrice.textContent = item.productPrice;
    
    const infoButton = document.createElement('button');
    infoButton.setAttribute('class', 'product__info-action');
    infoButton.setAttribute('type', 'button')
    infoButton.textContent = "ORDER NOW";


    const infoCategory = document.createElement('div');

    productInfo.appendChild(infoTitle);
    infoTitle.insertAdjacentElement('afterend', infoDescription);
    infoDescription.insertAdjacentElement('afterend', infoPrice);
    infoPrice.insertAdjacentElement('afterend', infoButton);
    
    item.productCategory.forEach(element => {
        const category = document.createElement('span');
        category.setAttribute('class', 'product__info-category');
        category.textContent = element;
        
        infoCategory.appendChild(category);
        // infoPrice.insertAdjacentElement('afterend', category)
    });
    
    infoPrice.insertAdjacentElement('afterend', infoCategory);


    product.appendChild(productImage);
    productImage.insertAdjacentElement('afterend', productInfo);
    
    return product;
}

export default Product;