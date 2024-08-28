#!/usr/bin/node

const url = require('url').URL;

// const myUrl = new url('/foo', 'https://example.com/')
const myUrl = new url({toString: () => 'https://clover:field@www.facebook.com/profile/index.php?id=123123#contact'})

console.log(myUrl)