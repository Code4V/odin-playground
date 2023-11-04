import Moon from '@carbon/icons/lib/moon/16';
import Sun from '@carbon/icons/lib/watson-health/contour-finding/16';
import { getAttributes, toSVG } from '@carbon/icon-helpers';

const NavBar = () => {
  const root = document.documentElement;

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const navbarTodoHeaderContainer = document.createElement('div');
  navbarTodoHeaderContainer.classList.add('navbar__header');

  const navbarTodoHeader = document.createElement('span');
  navbarTodoHeader.classList.add('navbar__header-main');
  navbarTodoHeader.innerText = 'ToDo';

  const navbarTodoSubHeader = document.createElement('span');
  navbarTodoSubHeader.classList.add('navbar__header-sub');
  navbarTodoSubHeader.innerText = 'by Code4V';

  navbarTodoHeaderContainer.append(navbarTodoHeader, navbarTodoSubHeader);

  const navbarThemeSwitcher = document.createElement('button');
  navbarThemeSwitcher.classList.add('navbar__theme-switcher');
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

  root.dataset.theme = localStorage.getItem('themePreference') ?? 'light';
  if (root.dataset.theme === 'light') {
    navbarThemeSwitcher.classList.add('navbar__theme-switcher--moon');
    navbarThemeSwitcher.appendChild(navbarThemeSwitcherButtonMoon);
  } else {
    navbarThemeSwitcher.classList.add('navbar__theme-switcher--sun');
    navbarThemeSwitcher.appendChild(navbarThemeSwitcherButtonSun);
  }

  navbarThemeSwitcher.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';

    if (root.dataset.theme === 'dark') {
      navbarThemeSwitcher.classList.replace(
        'navbar__theme-switcher--moon',
        'navbar__theme-switcher--sun',
      );
      navbarThemeSwitcherButtonMoon.replaceWith(navbarThemeSwitcherButtonSun);
    } else {
      navbarThemeSwitcher.classList.replace(
        'navbar__theme-switcher--sun',
        'navbar__theme-switcher--moon',
      );
      navbarThemeSwitcherButtonSun.replaceWith(navbarThemeSwitcherButtonMoon);
    }

    localStorage.setItem('themePreference', root.dataset.theme);
  });

  navbar.append(navbarTodoHeaderContainer, navbarThemeSwitcher);

  return navbar;
};

export default NavBar;
