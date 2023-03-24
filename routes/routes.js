const { Router } = require('express')
const router = Router()
const waterController = require('../controllers/waterController')
// const fishController = require('../controllers/fishController')
// const lureController = require('../controllers/lureController')
const userController = require('../controllers/userController')
// const authController = require('../controllers/authController')

//Routes for Water
router.get('/', (req, res) => res.send('Home'))
router.get('/bodyofwater', waterController.getAllWater)
// router.post('/bodyofwater', waterController.createWater)
//Routes for User
router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUserById)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/:id', userController.updateUser)
module.exports = router
