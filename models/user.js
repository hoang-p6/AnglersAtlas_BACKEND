const Schema = mongoose.Schema

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: false },
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
