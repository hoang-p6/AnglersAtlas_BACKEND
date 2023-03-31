const { Router } = require('express')
const router = Router()
const waterController = require('../controllers/waterController')
const fishController = require('../controllers/fishController')
const lureController = require('../controllers/lureController')
const userController = require('../controllers/userController')
const logController = require('../controllers/logController')
// const authController = require('../controllers/authController')

//Routes for Water
router.get('/water', waterController.getAllWaters)
router.post('/water', waterController.createWater)
router.get('/water/:id', waterController.getWaterById)
router.delete('/water/:id', waterController.deleteWater)
router.put('/water/:id', waterController.updateWater)

//Routes for User
router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.updateUser)
//Routes for Fish
router.get('/fish', fishController.getAllFish)
router.post('/fish', fishController.createFish)
router.get('/fish/:id', fishController.getFishById)
router.delete('/fish/:id', fishController.deleteFish)
router.put('/fish/:id', fishController.updateFish)
//Routes for Lure
router.get('/lure', lureController.getAllLures)
router.post('/lure', lureController.createLure)
router.get('/lure/:id', lureController.getLureById)
router.delete('/lure/:id', lureController.deleteLure)
router.put('/lure/:id', lureController.updateLure)
//Routes for Log
router.get('/log', logController.getAllLogs)
router.post('/log', logController.createLog)
router.get('/log/:id', logController.getLogById)
router.delete('/log/:id', logController.deleteLog)
router.put('/log/:id', logController.updateLog)

module.exports = router
