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
app.use(cors())
// app.get('/cors', (req, res) => {
//   res.set('Access-Control-Allow-Origin', 'https://anglersatlas.surge.sh/')
//   res.send({ msg: 'This has CORS enabled ' })
// })

app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', 'https://anglersatlas.surge.sh/')
  next()
})

app.use('/api', routes)
app.use('/auth', AuthRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
