const express = require('express')
const routes = require('./routes/routes')
const logger = require('morgan')
const cors = require('cors')
const AuthRouter = require('./routes/authRouter')

const db = require('./db')
const PORT = process.env.PORT || 3001
const app = express()

const { Water } = require('./models/water')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(
  cors({
    origin: '*'
  })
)
app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
app.use('/api', routes)
app.use('/auth', AuthRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
