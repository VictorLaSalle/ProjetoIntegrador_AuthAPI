const bcrypt = require('bcrypt')
require('../gateways/credentials')

const ROUNDS = 10

module.exports = createUser = async (email, plainText) => bcrypt.hash(plainText, ROUNDS, (err, hash) => err ? console.log(err) : setCredentials(email, hash))

module.exports = compareCredentials = async (email, plainText) => {

    const token = await getCredentials(email).then(data => data[0][0].token).catch(err => console.log(err))
      
        return bcrypt.compare(plainText, token)
          .then(result => result)
          .catch(err => console.log(`${err} => Ocorreu um erro no crypto`))
    
}