import convertCurrency, { getAllCurrency } from "../operations/convertion";
import FormInput from "./formInput";

let currencyArray = [];

const CurrencyForm = async () => {
  
  Object.entries(await getAllCurrency()).forEach(currency => {
        if (currency[1].length === 0) return;
        currencyArray.push({
          value: currency[0],
          content: currency[1],
        })
      });

  const currencyForm = document.createElement('form');
  currencyForm.classList.add('currency-form');
  

  const selectFrom = FormInput("selectionFrom", "From Currency").SelectField({
    choices: currencyArray,
    isDefault: 'php',
  });

  const fromInput = FormInput("from", "Amount").NumberField({
    isRequired: true,
    placeholder: 'Enter Any Amount',
  });

  const selectTo = FormInput("selectionTo", "To Currency").SelectField({
    choices: currencyArray
  });


  const convertButton = FormInput("submit", "Convert").SubmitForm({
    placeholder: 'Convert Now!'
  });

  currencyForm.append(fromInput, selectFrom, selectTo, convertButton);

  const body = document.querySelector('body');
  const p = document.createElement('p');

  currencyForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    p.textContent = await convertCurrency(selectFrom.childNodes[2].value, selectTo.childNodes[2].value, fromInput.childNodes[2].value);
    
  })

  body.append(p);
  
  return currencyForm;
};

export default CurrencyForm;
