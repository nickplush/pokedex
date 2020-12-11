const {Router} = require('express');
const router = Router();
const userController = require('../controller/user.controller')

router.get('/user',userController.getUserName);

module.exports = router;
