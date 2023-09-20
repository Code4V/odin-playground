class Order
{
  #pasta; #chicken; #drink;
  constructor(pastaAmt = 0, chickenAmt = 0, drinkAmt = 0)
  {
    this.#pasta = pastaAmt;
    this.#chicken = chickenAmt;
    this.#drink = drinkAmt;
  }

  
  get orderSummary()
  {
    if (this.#chicken == 0
        && this.#drink == 0 
        && this.#pasta == 0)
    return 'No order yet!'
    
    return `
    Summary of Order:
    Pasta - ${this.#pasta}
    Chicken - ${this.#chicken}
    Drink - ${this.#drink}
    `
  }

}


class OrderBuiler {

  addPasta(amount = 1)
  {
    this.pasta = amount;
    console.log(this)
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


  get build()
  {
    return new Order(this.pasta, this.chicken, this.drink)
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

var order = new OrderBuiler().addChicken().addPasta().build;

var order2 = new SingletonTest();

export { order, order2 };