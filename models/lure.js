const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Fish = new Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    fish: { type: Schema.Types.ObjectId, ref: 'Fish' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Fish', Fish)
