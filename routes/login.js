const express = require('express')
const router = express.Router()
require('../services/crypto')

router.post('/', (req, res) => compareCredentials(req.body.email, req.body.password)
                                                    .then(data => res.send(data))
                                                    .catch(err => console.log(err)))

module.exports = router
