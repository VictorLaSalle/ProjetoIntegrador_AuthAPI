module.exports = connect =  async function connect() {
    if(global.connection && global.connection.state !== 'disconnect') {
        return global.connection
    }

    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection(process.env.MYSQL_URL)
    console.log('Conectado ao MySQL')
    module.exports = connection
    return connection
}