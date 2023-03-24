const User = require('../models/user')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      passwordDigest
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      email: email
    })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on login!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    // Extracts the necessary fields from the request body
    const { oldPassword, newPassword } = req.body
    // Finds a user by a particular field (in this case, the user's id from the URL param)
    const user = await User.findByPk(req.params.user_id)
    // Checks if the password matches the stored digest
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    // If they match, hashes the new password, updates the db with the new digest, then sends the user as a response
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  Login,
  UpdatePassword,
  CheckSession,
  getUserById
}
