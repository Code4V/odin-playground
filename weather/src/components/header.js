let Header;

export default Header = () => {
  const headerWrapper = document.createElement('header');
  headerWrapper.classList.add('header');

  const header = document.createElement('h1');
  header.classList.add('header__title');
  header.innerHTML = 'Weather <span>API</span>';

  const headerSub = document.createElement('p');
  headerSub.textContent = 'please check the console for the meantime!'

  headerWrapper.append(header, headerSub);

  return headerWrapper;
}