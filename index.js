const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv-safe').config()

const loginRoute = require('./routes/login')

const app = express()

app.use(express.json())
app.use('/login', loginRoute)

app.listen(3000, () => console.log('Escutando na porta 3000'))