import Moon from '@carbon/icons/lib/moon/16';
import Sun from '@carbon/icons/lib/watson-health/contour-finding/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';

const NavBar = () => 
{
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const navbarTodoHeader = document.createElement('span');
  navbarTodoHeader.classList.add('navbar__header');
  navbarTodoHeader.innerText = 'To-Do App';

  const navbarThemeSwitcher = document.createElement('button');
  navbarThemeSwitcher.classList.add('navbar__theme-switcher');

  const navbarThemeSwitcherButtonMoon = toSVG({
    ...Moon,
    attrs: getAttributes(Moon.attrs),
  });

  const navbarThemeSwitcherButtonSun = toSVG({
    ...Sun,
    attrs: getAttributes(Sun.attrs),
  });

  navbarThemeSwitcher.appendChild(navbarThemeSwitcherButtonMoon);

  navbarThemeSwitcher.addEventListener('click', () => {
    const root = document.documentElement;

    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';

    if (root.dataset.theme === 'dark')
      navbarThemeSwitcherButtonMoon.replaceWith(navbarThemeSwitcherButtonSun)
    else
      navbarThemeSwitcherButtonSun.replaceWith(navbarThemeSwitcherButtonMoon)
// console.log(document.documentElement.setAttribute('data-theme', 'dark'));

  })


  navbar.append(navbarTodoHeader, navbarThemeSwitcher);

  return navbar
}

export default NavBar;