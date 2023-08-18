import Navigation from "./navigation";

const HeaderNavigation = () =>
{
    const MainNavigation = document.createElement("nav");
    MainNavigation.setAttribute("class", "header-navigation");
  
    MainNavigation.appendChild(Navigation(["Home", "Menu", "Contact"]));
    return MainNavigation;
}

export default HeaderNavigation;