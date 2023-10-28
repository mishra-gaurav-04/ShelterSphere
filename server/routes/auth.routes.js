const express = require('express');
const router = express.Router();

router.post('/sign-up');
router.post('/sign-in');
router.post('/google');
router.post('/refresh-token');
router.delete('/signo-out');

module.exports = router;

