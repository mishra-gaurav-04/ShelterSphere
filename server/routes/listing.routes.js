const express = require('express');
const router = express.Router();

router.post('/create');
router.delete('/delete/:id');
router.patch('/update/:id');
router.get('/get/:id');
router.get('/get');

module.exports = router