const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv-safe').config()

const loginRoute = require('./routes/login')
const createUserRoute = require('./routes/createUser')

const app = express()

app.use(express.json())
app.use('/login', loginRoute)
app.use('/createUser', createUserRoute)

app.listen(3000, () => console.log('Escutando na porta 3000'))