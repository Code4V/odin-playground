import './style/index.css';
const { default: CurrencyForm } = require("./components/currencyForm");


const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', async () => {
  
  main.append(await CurrencyForm());

  const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php/jpy.json', {
    mode: 'cors',
  });

  console.log((await result.json()).jpy)
})