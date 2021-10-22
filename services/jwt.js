const jwt = require("jsonwebtoken")

module.exports = verifyJWT = (token) => {
    if(token == null) 
        return {status: 401, message: "Nenhum token foi provido"}

    return jwt.verify(token, process.env.SECRET, (err, decoded) => err ? err : decoded)
}