#!/usr/bin/node

const axios = require('axios');
const https = require('https');
const http = require('http');
const fs = require('fs');
const url = require('url');

const fs2 = require('fs/promises');
const path = require('path');

const pathName = 'fsDrop/files';
const fileName = 'fsDrop/files/test.txt';

// fs.mkdir(path.join(__dirname, pathName), 
//   { recursive: true}, 
//   (err) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log('Directory created successfully');
// });

// const content = 'Some Content!';

// fs.writeFile(fileName, content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('Success');
//   }
// });

// async function example(){
//   try{
//     const con = 'More Content';
//     await fs2.appendFile(fileName, con);
//     await fs2.appendFile(fileName, con);
//     await fs2.appendFile(fileName, con);
//     await fs2.appendFile(fileName, con);
//     console.log('More Success');
//   } catch (err) {
//     console.log(err);
//   }
// }; 

// const indexPath = '../index.html';
// async function readTest(){
//   try {
//     setTimeout(async () => {
//       const data = await fs2.readFile(indexPath, 'utf-8');
//       console.log(data);
//     }, 1000)
//   } catch (err) {
//     console.log(err)
//   }
// }

// example();
// readTest(); 

// fs.mkdir('fsDrop/file', () => {});

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(req.url);
  let q = url.parse(req.url, true).query;
  let txt = q.year + " " + q.month;
  res.end(txt);
  // fs.readFile('../index.html', 'utf-8' ,(err, data) => {
  //   if (err) {
  //     console.error(err);
  //   }

  //   res.write(data);
  // })

})

server.listen(8000);

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