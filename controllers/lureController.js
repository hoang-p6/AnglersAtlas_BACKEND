const Lure = require('../models/lure')

const getAllLures = async (req, res) => {
  try {
    const lures = await Lure.find()
    return res.status(200).json({ lures })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getLureById = async (req, res) => {
  try {
    const { id } = req.params
    const lure = await Lure.findById(id)
    if (lure) {
      return res.status(200).json({ lure })
    }
    return res.status(404).send('Requested user does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createLure = async (req, res) => {
  try {
    const lure = await new Lure(req.body)
    await lure.save()
    return res.status(201).json({
      lure
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteLure = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Lure.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Lure deleted')
    }
    throw new Error('Lure not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateLure = async (req, res) => {
  try {
    const lure = await Lure.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(lure)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllLures,
  getLureById,
  deleteLure,
  updateLure,
  createLure
}
