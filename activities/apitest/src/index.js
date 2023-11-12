import Result from './components/Result';
import './style/index.css';
const { default: CurrencyForm } = require("./components/currencyForm");


const main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', async () => {
  
  main.append(await CurrencyForm(), Result());

  const result = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/php/jpy.json', {
    mode: 'cors',
  });

  console.log((await result.json()).jpy)
})