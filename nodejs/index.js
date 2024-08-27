#!/usr/bin/node

const axios = require('axios');
const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  })
})


// axios
//   .get('https://example.com/todos')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);   
//   })
//   .catch(err => {
//     console.error(err);
//   })