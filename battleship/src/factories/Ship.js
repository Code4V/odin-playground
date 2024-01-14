export const Ship = (typeOfShip) => {
  if (typeOfShip === '') return null;

  const shipType = typeOfShip;
  let isSunk = false;

  let shipHealth;
  switch (shipType) {
    case 'Patrol':
      shipHealth = 2;
      break;
    case 'Cruiser':
      shipHealth = 3;
      break;
    case 'Battleship':
      shipHealth = 4;
      break;
    case 'Carrier':
      shipHealth = 5;
      break;
    default:
      shipHealth = 1;
      break;
  }

  const shipLength = shipHealth;

  const getHealth = () => shipHealth;
  const getIsSunk = () => isSunk;
  const getLength = () => shipLength;
  const getType = () => shipType;

  const hit = () => {
    shipHealth -= 1;
    if (shipHealth === 0) isSunk = true;

    return null;
  };

  return {
    getType,
    shipHealth,
    getHealth,
    getIsSunk,
    getLength,
    hit,
  };
};
