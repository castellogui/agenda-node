const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.post('/signUp', loginController.Login)

module.exports = router;