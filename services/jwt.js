const jwt = require("jsonwebtoken")

module.exports = verifyJWT = (token) => jwt.verify(token, process.env.SECRET, (err, decoded) => err ? err : decoded)
