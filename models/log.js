const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Log = new Schema(
  {
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Log', Log)
