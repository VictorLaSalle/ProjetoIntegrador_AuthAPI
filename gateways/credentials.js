require('../repository/database')

module.exports = getCredentials = async (email) => await connect().then((data) => data.query(`SELECT token FROM Usuarios WHERE email = '${email}'`)).catch(err => console.log(err))
module.exports = setCredentials = async (email, hash) => await connect().then((data) => data.query(`INSERT INTO Usuarios(email, token) VALUES ('${email}', '${hash}')`)).catch(err => console.log(err))

