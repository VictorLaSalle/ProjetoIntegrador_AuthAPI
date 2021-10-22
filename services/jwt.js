const jwt = require("jsonwebtoken")

module.exports = verifyJWT = (req) => {
    let token = req.headers['x-access-token']

    if(token == null) 
        return {status: 401, message: "Nenhum token foi provido"}

    return jwt.verify(token, process.env.SECRET, (err, decoded) => err ? {status: 500, message: "Falha na autenticação"} : decoded)
}