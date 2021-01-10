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
    for (let roomV of Vip) {
        roomV.noithat = [];
        roomV.kichthuoc = 25
        roomV.view = "Không gian rộng rãi tiện nghi, khung cảnh lãng mạn."
        for (const furV of furVip) {
            const noithat = [
                furV.MaThietBi,
                furV.TenThietBi
            ]
            roomV.noithat = [...roomV.noithat, noithat];
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


router.get('/room-type', async (req, res, next) => {
    const roomTypes = await roomModel.getAllRoomTypes();
    res.send(roomTypes);
});

router.post('/add-room', async(req, res, next) => {
    await roomModel.addRoom(req.body);
    res.send();
});

router.post('/room-add-fur',async(req,res,next)=>{
    const thietbi=req.body;
    await roomModel.addFur(thietbi.TenThietBi,thietbi.MaLoaiPhong);

    res.send();
})

module.exports = router;