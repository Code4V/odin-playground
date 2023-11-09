export default function Header() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerContent = document.createElement('h1');
  headerContent.classList.add('header__content');
  headerContent.textContent = 'Verification Form';

  header.append(headerContent);
  return header;
}
