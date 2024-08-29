#!/usr/bin/node

const axios = require('axios');
const https = require('https');
const http = require('http');
const fs = require('fs');
const url = require('url');

const path = require('path');

const pathName = 'fsDrop/files';
const fileName = 'fsDrop/files/test.txt';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // const uri = new url();

  console.log(req.method)

  switch (url.parse(req.url).path){
    case '/': 
      fs.readFile('index1.html', (err, data) => {
        if (err) res.end(err.message)
        res.end(data);
      });
      break;
    case '/contact': 
      fs.readFile('urls/contact.html', (err, data) => {
        if (err) res.end(err.message)
        res.end(data);
      });
      break;
    default: 
      fs.readFile('urls/error.html', (err, data) => {
        if (err) res.end(err.message)
        res.end(data);
      })
      break;
  }
  // let q = url.parse(req.url, true).query;
  // let txt = q.year + " " + q.month;
  // res.end(txt);
  // fs.readFile('../index.html', 'utf-8' ,(err, data) => {
  //   if (err) {
  //     console.error(err);
  //   }

  //   res.write(data);
  // })

})

server.listen(8000);

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