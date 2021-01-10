const express = require('express');
const router = express.Router();
const roomModel = require('../models/room.model');

router.get('/allroom', async (req, res, next) => {
    const roomNor = await roomModel.getRoomNor();
    const roomVip = await roomModel.getRoomVip();
    const furNor = await roomModel.getFurRoomNor();
    const furVip = await roomModel.getFurRoomVip();
    let Nor = [...roomNor];
    for (let room of Nor) {
        room.noithat = [];
        room.kickthuoc = 15;
        room.view = "Không gian thoáng mát , khung cảnh hướng ra biển.";
        for (const fur of furNor) {
            const noithat = [
                fur.MaThietBi,
                fur.TenThietBi
            ]
            room.noithat = [...room.noithat, noithat];

        }
    }
    let Vip = [...roomVip];
    for (let room of Vip) {
        room.noithat = [];
        room.kichthuoc = 25
        room.view = "Không gian rộng rãi tiện nghi, khung cảnh lãng mạn."
        for (const fur of furVip) {
            const noithat = {
                MaThietBi: fur.MaThietBi,
                TenThietBi: fur.TenThietBi
            }
            room.noithat = [...room.noithat, noithat];
        }
    }
    const Allrooms = [roomNor, roomVip];
    res.send(Allrooms);
});

router.post('/room-update-gia', async (req, res, next) => {
    const edtPriceRoom = req.body;
    await roomModel.updatePrice(edtPriceRoom);

    res.send();
});

router.post('/room-del-noithat', async (req, res, next) => {
    const edtFurnitureRoom = req.body;

    await roomModel.editFurniture(edtFurnitureRoom);

    res.send();
});
module.exports = router;