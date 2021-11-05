const express = require('express')
require('dotenv-safe').config()
require('./services/jwt')
const cors = require('cors')

const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const createUserRoute = require('./routes/createUser')
const auth = require('./routes/verifyJWT')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/auth', auth)
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/createUser', createUserRoute)

let porta = process.env.PORT || 4000

app.listen(porta, () => console.log('Escutando na porta 3000'))