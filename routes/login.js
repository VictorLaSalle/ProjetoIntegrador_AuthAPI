const express = require('express')
const router = express.Router()
const credentials = require('../gateways/getCredentials')

router.get('/', async (req, res) => res.send(await credentials(req.body.email)
                                                    .then(data => data)
                                                    .catch(err => res.send(err))))

module.exports = router
