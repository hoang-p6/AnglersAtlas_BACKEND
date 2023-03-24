const Water = require('../models/water')

// const createWater = async (req, res) => {
//   try {
//     constbody = await new Water(req.body)
//     awaitbody.save()
//     return res.status(201).json({
//       Water
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }
const getAllWater = async (req, res) => {
  try {
    const water = await Water.find()
    return res.status(200).json({ water })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  // createWater,
  getAllWater
}
