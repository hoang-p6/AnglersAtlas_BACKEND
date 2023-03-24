const { Router } = require('express')
const router = Router()
const waterController = require('../controllers/waterController')
// const fishController = require('../controllers/fishController')
// const lureController = require('../controllers/lureController')
const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')

//Routes for Water
router.get('/water', waterController.getAllWaters)
router.get('/water/:id', waterController.getWaterById)
router.delete('/water/:id', waterController.deleteWater)
router.put('/water/:id', waterController.updateWater)
//Routes for User
router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.updateUser)
module.exports = router
