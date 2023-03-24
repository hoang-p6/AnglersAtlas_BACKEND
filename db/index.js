require('dotenv').config()
const mongoose = require('mongoose')
const MONGODBURI = process.env.MONGODB_URI

mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
