require('dotenv').config()
const test = require('./src/functions/paymongo');
(async () => {
  const Link = await test();
  
  console.log(Link)
})()


// link_X92xFBuMZ94mhyEect3yN9wj
// https://pm.link/lakbayantesting/test/mNZywEP
// mNZywEP