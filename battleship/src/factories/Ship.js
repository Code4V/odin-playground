export const Ship = (typeOfShip = 'Patrol') => {
  if (typeOfShip === '') return null;
  if (typeOfShip === undefined) return null;

  const shipType = typeOfShip.toUpperCase();
  let isSunk = false;

  let shipHealth;
  switch (shipType) {
    case 'PATROL':
      shipHealth = 2;
      break;
    case 'CRUISER':
      shipHealth = 3;
      break;
    case 'BATTLESHIP':
      shipHealth = 4;
      break;
    case 'CARRIER':
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
