export const Gameboard = (player) => {
  const GameBoard = document.createElement('section');
  GameBoard.classList.add('playerboard');

  const gameBoard = player.getPlayerBoard().getGameBoard();
  gameBoard.forEach((row, index) => {
    const newRow = document.createElement('div');
    newRow.classList.add('playerboard__row');
    newRow.dataset.id = index;

    row.forEach((col, i) => {
      const newCol = document.createElement('div');
      newCol.classList.add('playerboard__row-col');
      newCol.dataset.id = index.toString() + i;
      if (typeof col === 'object') {
        const [firstLetter, secondLetter] = col.getType();
        newCol.textContent = firstLetter + secondLetter;
        newCol.classList.add('playerboard__row-col--bold');
      } else {
        newCol.textContent = `${col}`;
      }

      newCol.addEventListener('click', () => {
        document.querySelector('#main').insertAdjacentHTML('afterend', `${index} ${i} clicked! \n</br>`);

        if (typeof col === 'object') newCol.innerText = 'HIT!';
        else newCol.innerText = 'X';
      });

      newRow.appendChild(newCol);
    });

    GameBoard.appendChild(newRow);
  });

  return GameBoard;
};
