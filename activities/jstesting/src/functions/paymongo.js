require('dotenv').config()

const paymongo = require('paymongo-node')(process.env.PAYMONGO_SECRET);

// module.exports = () => {
//   return paymongo.links.create({
//     amount: 10000, 
//     description: 'Testing'
//   })
// }

module.exports = () => {
  return paymongo.links.retrieve('link_X92xFBuMZ94mhyEect3yN9wj')
} 

