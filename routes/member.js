const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member.controller')


router.get('/', memberController.index)
router.post('/delete', memberController.delete);

module.exports = router;