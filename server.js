const express = require('express')
const routes = require('./routes/routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const AuthRouter = require('./routes/authRouter')

const app = express()

const { Water } = require('./models/water')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())
app.use('/api', routes)
app.use('/api/auth', AuthRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
