const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Water = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    state: { type: String, required: true },
    image: { type: String, required: true },
    longitude: { type: String, required: true },
    latitude: { type: String, required: true },
    species: [{ type: Schema.Types.ObjectId, ref: 'Fish' }],
    log: [{ type: Schema.Types.ObjectId, ref: 'Log' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Water', Water)
