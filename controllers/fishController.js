const Fish = require('../models/fish')

const getAllFish = async (req, res) => {
  try {
    const fish = await Fish.find()
    return res.status(200).json({ fish })
  } catch (error) {
    // return res.status(500).send(error.message)
    return res.status(500).send('NO WORK')
  }
}
const getFishById = async (req, res) => {
  try {
    const { id } = req.params
    const fish = await Fish.findById(id)
    if (fish) {
      return res.status(200).json({ fish })
    }
    return res.status(404).send('Requested fish does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createFish = async (req, res) => {
  try {
    const fish = await new Fish(req.body)
    await fish.save()
    return res.status(201).json({
      fish
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteFish = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Fish.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Fish deleted')
    }
    throw new Error('Fish not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateFish = async (req, res) => {
  try {
    const fish = await Fish.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(fish)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllFish,
  getFishById,
  deleteFish,
  updateFish,
  createFish
}
