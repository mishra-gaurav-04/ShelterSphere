const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/sign-up',authController.signUp);
router.post('/sign-in',authController.signIn);
router.post('/google');
router.post('/refresh-token');
router.delete('/sign-out',authController.signOut);

module.exports = router;

