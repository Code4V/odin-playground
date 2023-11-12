const Result = () => {

  const result = document.createElement('section');
  result.classList.add('result');

  const resultTitle = document.createElement('h2');
  resultTitle.textContent = 'Result';

  const resultAmount = document.createElement('p');
  resultAmount.id = 'result-amount';
  resultAmount.textContent = '.';

  result.append(resultTitle, resultAmount)

  const resultAmountLeft = document.createElement('span');
  resultAmountLeft.id = 'amount-whole';

  const resultAmountRight = document.createElement('span');
  resultAmountRight.id = 'amount-float';

  resultAmount.insertAdjacentElement('afterbegin', resultAmountLeft)
  resultAmount.insertAdjacentElement('beforeend', resultAmountRight)



  return result;
}

export default Result;