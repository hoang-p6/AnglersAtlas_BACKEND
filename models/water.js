const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Water = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    state: { type: String, required: true },
    coordinates: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Water', Water)
