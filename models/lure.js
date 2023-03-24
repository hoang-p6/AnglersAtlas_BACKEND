const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lure = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Lure', Lure)
