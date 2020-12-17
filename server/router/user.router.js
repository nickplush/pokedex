const { Router } = require('express')
const router = Router()
const userController = require('../controller/user.controller')

router.post('/favorite', userController.addFavorite)
router.patch('/favorite', userController.removeFavorite)
router.get('/favorite', userController.getFavorite)

module.exports = router
