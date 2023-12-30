require('dotenv').config()

test('Paymongo Object to be Not Null when valid secret key', () => {
  const paymongo = require('paymongo-node')(process.PAYMONGO_SECRET);
  expect(paymongo.apiKey).toBeUndefined();
})

test('Paymongo Object to be Not Null when invalid secret key', () => {
  const paymongo = require('paymongo-node')('invalid key');
  expect(paymongo.apiKey).not.toBeUndefined();
})