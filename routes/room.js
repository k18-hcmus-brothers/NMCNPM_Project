const express = require('express');
const router = express.Router();
const roomModel = require('../models/room.model');

router.get('/roomNor', async (req, res, next) => {
    const room = await roomModel.getAllRoom();
    res.send(room);
});

router.get('/roomVip',async(req,res,next)=>{
    const room =await roomModel.getRoomVip();
    res.send(room);
})

router.get('/furroomNor',async(req,res)=>{
    const fur=await roomModel.getFurRoonNor();
    res.send(fur);
})

router.get('/furroomVip',async(req,res)=>{
    const fur=await roomModel.getFurRoonVip();
    res.send(fur);
})

router.post('/room-update-gia', async (req, res, next) => {
    const edtPriceRoom = req.body;
    await roomModel.editPriceRoom(edtPriceRoom);

    res.send();
});

router.post('/room-update-noithat', async (req, res, next) => {
    const edtFurnitureRoom = req.body;
    await roomModel.editFurniture(edtFurnitureRoom);

    res.send();
});
module.exports = router;