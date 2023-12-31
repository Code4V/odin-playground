require('dotenv').config()

module.exports = class Paymongo {
  #paymongo;
  
  constructor(paymongo_secret_key){
    if (this.instance !== null) {
      return this.paymongo;
    }
    this.#paymongo = require('paymongo-node')(process.env.PAYMONGO_SECRET);
  }
}

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

