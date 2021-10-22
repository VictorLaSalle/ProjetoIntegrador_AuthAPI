const express = require('express')
const router = express.Router()
require('../services/jwt')

router.get('/', (req, res) => {
    let token = req.get('token')

    let checkToken = verifyJWT(token)

    if(checkToken instanceof Error) {
        res.status(403)
        res.send({status: 403, message: "Token inválido"})
    } else {
        res.status(200)
        res.send({status: 200, message: checkToken})
    }
})

module.exports = router