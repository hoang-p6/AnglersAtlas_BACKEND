const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Fish = new Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    image: { type: String, required: true },
    water: [{ type: Schema.Types.ObjectId, ref: 'Water' }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Fish', Fish)
