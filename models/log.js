const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Log = new Schema(
  {
    poster: { type: String, required: true },
    description: { type: String, required: true },
    waterId: { type: Schema.Types.ObjectId, ref: 'Water' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Log', Log)
