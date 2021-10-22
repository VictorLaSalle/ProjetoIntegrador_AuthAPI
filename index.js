const express = require('express')
require('dotenv-safe').config()
require('./services/jwt')

const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const createUserRoute = require('./routes/createUser')

const app = express()

app.use(express.json())
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/createUser', createUserRoute)

let porta = process.env.PORT || 3000

app.listen(porta, () => console.log('Escutando na porta 3000'))