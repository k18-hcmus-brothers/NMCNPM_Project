const express = require('express');
const router = express.Router();
const roomModel = require('../models/room.model');
router.get('/room', async (req, res, next) => {
    const room = await roomModel.getAllRoom();

    res.send(room);
});

router.post('/edit-price-room', async (req, res, next) => {
    const edtPriceRoom = req.body;
    await roomModel.editPriceRoom(edtPriceRoom);

    res.send();
});
router.post('/edit-furniture-room', async (req, res, next) => {
    const edtFurnitureRoom = req.body;
    await roomModel.editFurniture(edtFurnitureRoom);

    res.send();
});
module.exports = router;