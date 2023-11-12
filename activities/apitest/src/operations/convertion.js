export default async function convertCurrency(currencyFrom, currencyTo, currencyAmount) {
  try {
    const convertionAmount = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`)
    
    return Math.fround((await convertionAmount.json())[currencyTo] * currencyAmount);
  }
  catch (error){
    return error.getMessage();
  }
}

export function getAllCurrency () {
  const currencies = fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json', {mode: 'cors'});

  const responseJSON = currencies.then(response => {
    return response.json()
  })
  
  const data = responseJSON.then(currencies => {
    return currencies;
  })

  return data;
}