const express = require('express')
const router = express.Router()
require('../services/jwt')

router.get('/', (req, res) => {
    let header = JSON.parse(req.headers)

    let checkToken = verifyJWT(header.token)

    if(checkToken instanceof Error) {
        res.status(403)
        res.send({status: 403, message: "Token inválido"})
    } else {
        res.status(200)
        res.send({status: 200, message: checkToken})
    }
})

module.exports = router