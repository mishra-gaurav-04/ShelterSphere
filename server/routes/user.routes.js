const express = require('express');
const router = express.Router();

router.get('/listings/:id');
router.patch('/update/:id');
router.delete('/delete/:id');
router.get('/user/:id');

module.exports = router;