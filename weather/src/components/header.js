export default function Header() {
  const headerWrapper = document.createElement('header');
  headerWrapper.classList.add('header');

  const header = document.createElement('h1');
  header.classList.add('header__title');
  header.innerHTML = 'Weather <span>API</span>';

  headerWrapper.append(
    header,
  );

  return headerWrapper;
}
