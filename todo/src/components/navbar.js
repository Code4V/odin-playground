const NavBar = () => 
{
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const navbarTodoHeader = document.createElement('span');
  navbarTodoHeader.classList.add('navbar__header');
  navbarTodoHeader.innerText = 'To-Do App';

  const navbarThemeSwitcher = document.createElement('button');

  const navbarThemeSwitcherButton = document.createElement('i');

  navbar.append(navbarTodoHeader);

  return navbar
}

export default NavBar;