const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lure = new Schema({
  type: { type: String, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: true }
})

module.exports = mongoose.model('Lure', Lure)
