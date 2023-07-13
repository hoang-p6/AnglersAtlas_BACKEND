const Water = require('../models/water')

const getAllWaters = async (req, res) => {
  try {
    res.send('Get me some water!')
    const waters = await Water.find()

      .populate('log')
      .populate('species')
      .exec()
    // return res.status(200).json({ waters })
    return res.json({ waters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getWaterById = async (req, res) => {
  try {
    const { id } = req.params
    const water = await Water.findOne({ id })
      .populate('log')
      .populate('species')
      .exec()
    if (water) {
      return res.status(200).json({ water })
    }
    return res.status(404).send('Requested water does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createWater = async (req, res) => {
  try {
    const water = await new Water(req.body)
    await water.save()
    return res.status(201).json({
      water
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteWater = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Water.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Water deleted')
    }
    throw new Error('Water not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateWater = async (req, res) => {
  try {
    const water = await Water.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(water)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllWaters,
  getWaterById,
  deleteWater,
  updateWater,
  createWater
}
