export const Ship = (typeOfShip = 'Patrol') => {
  const shipType = typeOfShip.toUpperCase();
  let isSunk = false;
  let shipHealth;
  
  switch (typeOfShip.toUpperCase()){
    case 'PATROL':
      shipHealth = 1
    case 'CRUISER':
      shipHealth = 3;
    case 'DESTROYER':
      shipHealth = 4;
    default: 
      shipHealth = 1;
  }
  

  const getHealth = () => shipHealth;
  
  const hit = () => {
    shipHealth = shipHealth - 1;

    if (shipHealth === 0) isSunk = true;

    return shipHealth;
  }
  
  return {
    shipType, 
    shipHealth,
    getHealth,
    hit
  }
}