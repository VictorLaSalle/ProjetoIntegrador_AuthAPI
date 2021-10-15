const express = require('express')
const router = express.Router()
require('../services/crypto')

router.post('/', (req, res) => {
    createUser(req.body.email, req.body.password)
    res.status(200)
    res.send({status: 200, message:"Usuario criado"})
})

module.exports = router