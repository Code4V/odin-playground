import Navigation from "./navigation";

const HeaderNavigation = () =>
{
    const MainNavigation = document.createElement("nav");
    MainNavigation.setAttribute("class", "header-navigation");

    const headerNavigationTitle = document.createElement("p");
    headerNavigationTitle.setAttribute("class", "header-navigation__logo");
    headerNavigationTitle.textContent = "VIKINGS";

    
    // MainNavigation.appendChild(Navigation(["Home", "Menu", "Contact"]));
    MainNavigation.appendChild(headerNavigationTitle);
    return MainNavigation;
}

export default HeaderNavigation;