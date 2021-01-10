const express = require('express');
const router = express.Router();
const statisticModel = require('../models/statistic.model');
router.get('/', async (req, res, next) => {
  const row = await statisticModel.getInfo();

  res.send(row);
});
module.exports = router;