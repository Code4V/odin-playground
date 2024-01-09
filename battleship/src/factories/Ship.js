export const Ship = (typeOfShip = 'Patrol') => {
  if (typeOfShip === '') return null;
  const shipType = typeOfShip;
  let isSunk = false;

  let shipHealth;
  console.log(shipType)
  switch (shipType){
    case 'Patrol':
      shipHealth = 1;
      break;
    case 'Cruiser':
      shipHealth = 3;
      break;
    case 'Destroyer':
      shipHealth = 4;
      break;
    default: 
      shipHealth = 1;
      break;
  }
  

  const getHealth = () => shipHealth;
  const getIsSunk = () => isSunk;
  
  const hit = () => {
    shipHealth = shipHealth - 1;
    if (shipHealth === 0) isSunk = true;

    return null;
  }
  
  return {
    shipType, 
    shipHealth,
    getHealth,
    getIsSunk,
    hit
  }
}