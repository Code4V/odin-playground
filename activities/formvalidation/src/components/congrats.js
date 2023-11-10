export default function Congrats() {
  const congratsBackdrop = document.createElement('section');
  congratsBackdrop.classList.add('backdrop', 'backdrop--appear');

  const congrats = document.createElement('div');
  congrats.classList.add('congrats');

  const congratsClapping = document.createElement('span');
  congratsClapping.classList.add('congrats__icon');
  congratsClapping.textContent = '👏';

  const congratsText = document.createElement('p');
  congratsText.classList.add('congrats__text');
  congratsText.textContent = 'Congrats! All fields are valid';

  const congratsClose = document.createElement('button');
  congratsClose.classList.add('congrats__close');
  congratsClose.type = 'button';
  congratsClose.textContent = 'Close';

  congrats.append(congratsClapping, congratsText, congratsClose);

  congratsBackdrop.appendChild(congrats);

  congratsClose.addEventListener('click', () => {
    congratsBackdrop.remove();
  });

  return congratsBackdrop;
}
