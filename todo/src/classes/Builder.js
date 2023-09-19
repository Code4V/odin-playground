class BuilderTest {
  constructor()
  {
    this.pasta = 0;
    this.chicken = 0;
    this.drink = 0;
  }

  addPasta(amount = 1)
  {
    this.pasta = amount;
    return this;
  }

  addChicken(amount = 1)
  {
    this.chicken = amount;
    return this;
  }

  addDrink(amount = 1)
  {
    this.drink = amount;
    return this;
  }

  get orderSummary()
  {
    if (this.chicken == 0
        && this.drink == 0 
        && this.pasta == 0)
    return 'No order yet!'
    
    return `
    Summary of Order:
    Pasta - ${this.pasta}
    Chicken - ${this.chicken}
    Drink - ${this.drink}
    `
  }
}

export default class SingletonTest {
  static hasInstance;
  static number = 0;
  constructor ()
  {

  }
  static getInstance()
  {
    if(!SingletonTest.hasInstance)
      SingletonTest.hasInstance = new SingletonTest();

    return SingletonTest.hasInstance;
  }

  addNumber()
  {
    SingletonTest.number += 1;
    return this;
  }

  showNumber()
  {
    return SingletonTest.number;
  }
}

var order = new SingletonTest();

var order2 = new SingletonTest();

export { order, order2 };