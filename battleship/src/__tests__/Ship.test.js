import Ship from './../factories/Ship';

describe('Testing the Ship factory', () => {
  test('On creation of the Ship must not be Null', () => {
    const shipInstance = Ship();
    
    expect(shipInstance).not.toBeNull();
  })
})