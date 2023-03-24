const { Router } = require('express')
const router = Router()
const waterController = require('../controllers/waterController')
const fishController = require('../controllers/fishController')
const lureController = require('../controllers/lureController')
const userController = require('../controllers/userController')
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
router.get('/fish/:id', fishController.getFishById)
router.delete('/fish/:id', fishController.deleteFish)
router.put('/fish/:id', fishController.updateFish)
//Routes for Lure
router.get('/lure', lureController.getAllLures)
router.get('/lure/:id', lureController.getLureById)
router.delete('/lure/:id', lureController.deleteLure)
router.put('/lure/:id', lureController.updateLure)

module.exports = router
