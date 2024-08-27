#!/usr/bin/node

const axios = require('axios');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const pathName = 'fsDrop/files';
const fileName = 'fsDrop/files/test.txt';

fs.mkdir(path.join(__dirname, pathName), 
  { recursive: true}, 
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully');
});
// fs.mkdir('fsDrop/file', () => {});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   res.end(JSON.stringify({
//     data: 'Hello World',
//   }))

// })

// server.listen(8000);

// const secondServer = http.createServer();

// secondServer.on('request', (req, res) => {
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   res.end(JSON.stringify({
//     data: "This is the second server",
//   }))
// })

// secondServer.listen(8001)

// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET',
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   })
// });

// req.on('error', err => {
//   console.error(err);
// });

// req.end();


// axios
//   .get('https://example.com/todos')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);   
//   })
//   .catch(err => {
//     console.error(err);
//   })