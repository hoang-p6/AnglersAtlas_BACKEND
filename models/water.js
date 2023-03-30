const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Water = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: String, required: true },
    coordinates: { type: String, required: false },
    species: [{ type: Schema.Types.ObjectId, ref: 'Fish' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Water', Water)
