const express = require("express");
const { addBill } = require("../models/bill.model");
const router = express.Router();
const billModel = require("../models/bill.model");

router.get("/room", async (req, res) => {
  const rooms = await billModel.getAllRooms();
  res.send(rooms);
});

router.get("/bill", async (req, res) => {
  const bill = await billModel.getBillById(req.query.id);

  res.send(bill);
});

router.post("/addBill", async (req, res) => {
  try {
    const { room, customer, billDetails } = req.body;

    const result = await billModel.addBill(customer, room, billDetails);

    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
