#!/usr/bin/node

require('dotenv').config();
const axios = require('axios');
const https = require('https');
const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');


const path = require('path');

console.log(process.env.URL);
console.log(process.env.LANG);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const uri = {
    '/': 'index.html',
    '/contact': 'urls/contact.html',
    '/about': 'urls/about.html'
  };

  const reqPath = url.parse(req.url).path;
  const keys = Object.keys(uri);

  if (req.url.includes('assets/')) {
    const imageStream = fs.readFileSync(__dirname + reqPath)
    res.write(imageStream, 'binary')
  }

  if (req.url.includes('js/')) {
    const fileStream = fs.readFileSync(__dirname + reqPath)
    res.write(fileStream)
    res.end();
  }

  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) res.end(err.message);
      const uploadedFile = files.fileupload[0];
      let fromPath = uploadedFile.filepath;
      let toPath = __dirname + '\\fsDrop\\' + uploadedFile.originalFilename;

      fs.rename(fromPath, toPath, (err) => {
        if (err) res.end(err.message);
        res.write('File Uploaded and moved');
        res.end();
      })
    })
  }

  else if (!keys.includes(reqPath)) {
    const readStream = fs.createReadStream('urls/error.html');

    readStream.on('error', err => {
      res.write(err.message);
      res.end();
    })

    readStream.on('data', chunk => {
      res.write(chunk);
      res.end();
    })
  } else {

    const readStream = fs.createReadStream(uri[reqPath]);

    readStream.on('error', err => {
      res.write(err.message);
      res.end();
    })

    readStream.on('data', chunk => {
      res.write(chunk);
      res.end();
    })
  }

}).listen(8000);

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