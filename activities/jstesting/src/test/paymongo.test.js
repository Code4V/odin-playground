require('dotenv').config()

describe('Paymongo connection', () => {

  test('Paymongo Object to be undefined when valid secret key', () => {
    const paymongo = require('paymongo-node')(process.env.PAYMONGO_SECRET);
    console.log(paymongo)
    expect(paymongo.apiKey).toBe(process.env.PAYMONGO_SECRET);
  })
  
  test('Paymongo Object to be not undefined when invalid secret key', () => {
    const paymongo = require('paymongo-node')('invalid key');
    expect(paymongo.apiKey).toBe('invalid key');
  })

})