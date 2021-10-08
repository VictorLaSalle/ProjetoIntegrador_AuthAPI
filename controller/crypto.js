const bcrypt = require('bcrypt')
const credentials = require('../gateways/getCredentials')



module.exports = (email, pwd) => {

    const token = credentials(email).then(data => data[0].token).catch(err => err)

    bcrypt.compare(pwd, token)
          .then(result => result)
          .catch(err => console.log(err))
}