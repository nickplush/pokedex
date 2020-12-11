const {Router} = require('express');
const router = Router();
const authController = require('../controller/auth.controller')

router.post('/authentication',authController.authenticationUser);
router.post('/registration',authController.registrationUser);

module.exports = router;