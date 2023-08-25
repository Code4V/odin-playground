import Navigation from "./navigation";

const HeaderNavigation = () =>
{
    const MainNavigation = document.createElement("nav");
    MainNavigation.setAttribute("class", "header-navigation");

    const headerNavigationTitle = document.createElement("p");
    headerNavigationTitle.setAttribute("class", "header-navigation__logo");
    headerNavigationTitle.textContent = "VIKINGS";

    let headerNavigation = Navigation(["Home", "Menu", "Contact"])
    headerNavigation.classList.add('header-navigation__navigation');

    headerNavigation.childNodes[0].classList.add('header-navigation__navigation-items');

    MainNavigation.appendChild(headerNavigationTitle);
    MainNavigation.appendChild(headerNavigation);
    
    document.addEventListener('scroll', () => {
        MainNavigation.classList.add("header-navigation--scrolled")
        if(document.scrollingElement.scrollTop > 0)
        {
        }
        else
        {
        MainNavigation.classList.remove("header-navigation--scrolled")
        }
    })
    return MainNavigation;
}

export default HeaderNavigation;