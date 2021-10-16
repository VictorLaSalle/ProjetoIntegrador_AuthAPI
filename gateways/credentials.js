require('../repository/database')

module.exports = getCredentials = async (email) => await connect().then((data) => data.query(`SELECT token FROM usuarios WHERE email = '${email}'`)).catch(err => console.log(err))
module.exports = setCredentials = async (email, hash) => await connect().then((data) => data.query(`INSERT INTO usuarios(email, token) VALUES ('${email}', '${hash}')`)).catch(err => err)

