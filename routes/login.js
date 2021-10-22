const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
require('../services/crypto')
require('../services/jwt')

router.post('/', async (req, res) => {
    var response = await compareCredentials(req.body.email, req.body.password).then(data => data).catch(err => err)
    if(response != null || response != undefined) {
        let token = jwt.sign({ response }, process.env.SECRET, {
            expiresIn: 60
        })
        res.status(200)
        res.send({status:200, token: token})
    } else {
        res.status(403)
        res.send({status: 403, message: "Credenciais inválidas"})
    }
}) 

module.exports = router
