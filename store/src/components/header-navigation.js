import Navigation from "./navigation";

const HeaderNavigation = () =>
{
    const MainNavigation = document.createElement("nav");
    MainNavigation.setAttribute("class", "header-navigation");

    const headerNavigationTitle = document.createElement("p");
    headerNavigationTitle.setAttribute("class", "header-navigation__logo");
    headerNavigationTitle.textContent = "VIKINGS";

    console.log(window);
    console.log(document);


    
    // MainNavigation.appendChild(Navigation(["Home", "Menu", "Contact"]));
    MainNavigation.appendChild(headerNavigationTitle);
    
    document.addEventListener('mouseenter', () => {
        MainNavigation.classList.add("header-navigation--scrolled")
        if(document.scrollingElement.scrollTop > 0)
        {
        }
    })
    return MainNavigation;
}

export default HeaderNavigation;