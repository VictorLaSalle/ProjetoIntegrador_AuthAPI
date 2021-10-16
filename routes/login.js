const express = require('express')
const router = express.Router()
require('../services/crypto')

router.post('/', async (req, res) => {
    var response = compareCredentials(req.body.email, req.body.password).then(data => data).catch(err => err)
    if(response instanceof Error) {
        res.status(400)
        res.send({status: 400, message: response})
    } else {
        res.status(200)
        res.send({status: 200, message: response})
    }
}) 

module.exports = router
