const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller')


router.get('/', serviceController.index)
router.post('/delete', serviceController.delete);

module.exports = router;