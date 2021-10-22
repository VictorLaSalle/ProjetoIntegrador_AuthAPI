const bcrypt = require('bcrypt')
require('../gateways/credentials')

const ROUNDS = 10

module.exports = createUser = (email, plainText) => bcrypt.hash(plainText, ROUNDS).then(data => setCredentials(email, data)).catch(err => err)

module.exports = compareCredentials = async (email, plainText) => {

    const token = await getCredentials(email).then(data => data[0][0].token).catch(err => console.log(err))
      
    let comparation = await bcrypt.compare(plainText, token)
          .then(result => result)
          .catch(err => console.log(`${err} => Ocorreu um erro no crypto`))

          return comparation == true ? token : null 
    
}