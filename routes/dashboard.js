const express = require("express");
const { addForm: addBill } = require("../models/reservation-form.model");
const router = express.Router();
const reserveFormModel = require("../models/reservation-form.model");
const billModel = require("../models/bill.model");

router.get("/rooms", async (req, res) => {
  const rooms = await reserveFormModel.getAllRooms();
  res.send(rooms);
});

router.get("/bill", async (req, res) => {
  const bill = await reserveFormModel.getFormDataById(req.query.id);
  console.log(bill);
  res.send(bill);
});

router.get("/room", async (req, res) => {
  const room = await reserveFormModel.getRoomById(req.query.id);

  res.send(room);
});

router.post("/addBill", async (req, res) => {
  try {
    const { user, room, customer, billDetails } = req.body;

    const result = await addBill(customer, room, billDetails, user);

    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/bill/note", async (req, res) => {
  try {
    const { id, note } = req.body;

    const form = await reserveFormModel.getFormById(id);
    form.GhiChu = note;
    const result = await reserveFormModel.updateForm(form);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/bill/payment", async (req, res) => {
  try {
    const bill = req.body;

    const room = await reserveFormModel.getRoomById(bill.MaPhong);
    room.TinhTrang = "ok";
    room.MaThuePhongHienTai = null;
    await reserveFormModel.updateRoom(room);
    delete bill.MaPhong;
    await billModel.addBill(bill);

    res.json("OK");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
