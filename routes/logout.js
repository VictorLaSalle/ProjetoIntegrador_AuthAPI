const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.status(200)
    res.send({status: 200, token: null})
})