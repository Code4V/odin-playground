import HeaderImage from './../assets/header_bg.jpg';

const Header = () =>
{
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    
    const headerImageContainer = document.createElement('div');
    headerImageContainer.setAttribute('class', 'header__image');

    
    
    const headerImage = new Image();
    // headerImage.classList.add('class', 'header__image');
    headerImage.src = HeaderImage;
    // const headerImage = document.createElement('img');
    // headerImage.setAttribute('class', 'header__image');
    // headerImage.setAttribute('src', 'assets/header_bg.jpg');
    
    headerImageContainer.appendChild(headerImage);

    const headerContents = document.createElement('div');
    headerContents.setAttribute('class', 'header__contents');
    const headerContentsTitle = document.createElement('h1');
    headerContentsTitle.setAttribute('class', 'header__title');
    headerContentsTitle.textContent = 'VIKINGS: SEA BREEZE';

    const headerContentsSubtitle = document.createElement('p');
    headerContentsSubtitle.setAttribute('class', 'header__subtitle');
    headerContentsSubtitle.textContent = 'Where kings come to dine!';

    const headerContentsButtons = document.createElement('div');
    headerContentsButtons.setAttribute('class', 'header__buttons');

    const headerButton = document.createElement('button');
    headerButton.setAttribute('class', 'button header__buttons-see--primary');
    headerButton.setAttribute('type', 'button')
    headerButton.textContent = 'SEE MENU'

    headerButton.addEventListener('click', () => {
        alert(clicked);
    })

    headerContentsButtons.appendChild(headerButton);

    
    headerContents.appendChild(headerContentsTitle);
    
    headerContentsTitle.insertAdjacentElement('afterend', headerContentsSubtitle);
    headerContentsSubtitle.insertAdjacentElement('afterend', headerContentsButtons);
    
    headerImage.insertAdjacentElement('afterend', headerContents);


    header.appendChild(headerImageContainer)
    header.appendChild(headerContents)

    return header;
}

export default Header;