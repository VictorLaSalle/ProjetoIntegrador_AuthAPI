const db = require('../repository/database')

module.exports =  async (email) => await db().then((data) => data.query(`SELECT email FROM Usuarios WHERE email = ${email}`))