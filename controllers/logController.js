const Log = require('../models/log')

const getAllLogs = async (req, res) => {
  try {
    const log = await Log.find()
    return res.status(200).json({ log })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getLogById = async (req, res) => {
  try {
    const { id } = req.params
    const log = await Log.findById(id)
    if (log) {
      return res.status(200).json({ log })
    }
    return res.status(404).send('Requested log does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createLog = async (req, res) => {
  try {
    const log = await new Log(req.body)
    await log.save()
    return res.status(201).json({
      log
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteLog = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Log.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Log deleted')
    }
    throw new Error('Log not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateLog = async (req, res) => {
  try {
    const log = await Log.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(log)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllLogs,
  getLogById,
  deleteLog,
  updateLog,
  createLog
}
