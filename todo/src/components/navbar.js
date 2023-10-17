import Moon from '@carbon/icons/lib/moon/16';
import Sun from '@carbon/icons/lib/watson-health/contour-finding/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';

const NavBar = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const navbarTodoHeader = document.createElement('span');
  navbarTodoHeader.classList.add('navbar__header');
  navbarTodoHeader.innerText = 'To-Do App';

  const navbarThemeSwitcher = document.createElement('button');
  navbarThemeSwitcher.classList.add('navbar__theme-switcher', 'navbar__theme-switcher--moon');
  navbarThemeSwitcher.type = 'button';
  navbarThemeSwitcher.title = 'Theme Switch Button';

  const navbarThemeSwitcherButtonMoon = toSVG({
    ...Moon,
    attrs: getAttributes(Moon.attrs),
  });

  navbarThemeSwitcherButtonMoon.classList.add(
    'navbar__theme-switcher-icon',
    'navbar__theme-switcher-icon--moon',
  );

  const navbarThemeSwitcherButtonSun = toSVG({
    ...Sun,
    attrs: getAttributes(Sun.attrs),
  });

  navbarThemeSwitcherButtonSun.classList.add(
    'navbar__theme-switcher-icon',
    'navbar__theme-switcher-icon--sun',
  );

  navbarThemeSwitcher.appendChild(navbarThemeSwitcherButtonMoon);

  navbarThemeSwitcher.addEventListener('click', () => {
    const root = document.documentElement;

    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';

    if (root.dataset.theme === 'dark') {
      navbarThemeSwitcher.classList.replace('navbar__theme-switcher--moon', 'navbar__theme-switcher--sun');
      navbarThemeSwitcherButtonMoon.replaceWith(navbarThemeSwitcherButtonSun);
    } else {
      navbarThemeSwitcher.classList.replace('navbar__theme-switcher--sun', 'navbar__theme-switcher--moon');
      navbarThemeSwitcherButtonSun.replaceWith(navbarThemeSwitcherButtonMoon);
    }
  });

  navbar.append(navbarTodoHeader, navbarThemeSwitcher);

  return navbar;
};

export default NavBar;
