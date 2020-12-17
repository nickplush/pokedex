const { Router } = require('express')
const router = Router()
const authController = require('../controller/auth.controller')

router.post('/authentication', authController.authenticationUser)
router.post('/registration', authController.registrationUser)
router.get('/google', authController.googleAuth)

module.exports = router
