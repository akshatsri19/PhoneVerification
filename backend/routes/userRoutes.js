
const express = require('express');
const router = express.Router();
const { registerPhoneNumber, verifyPhoneNumber } = require('../controllers/userController');

router.post('/register', registerPhoneNumber);
router.post('/verify', verifyPhoneNumber);

module.exports = router;
