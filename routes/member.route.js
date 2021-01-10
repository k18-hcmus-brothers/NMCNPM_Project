const express = require('express');
const router = express.Router();
const roleModel = require('../models/role.model');
const memberModel = require('../models/member.model');
const authenticate = require('../authentication/authenticate');

// router.use(authenticate.auth);

router.get('/roles', async (req, res, next) => {
  const roles = await roleModel.getAllRoles();
  let result = [];

  for await (let role of roles) {
    let roleDetail = {};
    roleDetail.mavaitro = role.MaVaiTro;
    roleDetail.tenvaitro = role.TenVaiTro;
    roleDetail.dathuyphong = false;
    roleDetail.dathuydichvu = false;
    roleDetail.themxoaphong = false;
    roleDetail.themxoadichvu = false;
    roleDetail.themxoanhanvien = false;
    roleDetail.xemxuatbaocao = false;

    let abilities = await roleModel.getAbilities(role.MaVaiTro);
    abilities = abilities.map(item => item.machucnang);

    if (abilities.includes(1)) roleDetail.dathuydichvu = true;
    if (abilities.includes(2)) roleDetail.dathuyphong = true;
    if (abilities.includes(3)) roleDetail.themxoaphong = true;
    if (abilities.includes(4)) roleDetail.themxoadichvu = true;
    if (abilities.includes(5)) roleDetail.themxoanhanvien = true;
    if (abilities.includes(6)) roleDetail.xemxuatbaocao = true;

    result.push(roleDetail);
  }
  res.send(result);
});

router.get('/members', authenticate.auth, async (req, res, next) => {
  const members = await memberModel.getAllMembers();
  res.send(members);
});

router.post('/add-member', async (req, res, next) => {
  const newMember = req.body;
  await memberModel.addMember(newMember);

  res.send();
});

router.post('/delete-member', async(req, res, next) => {
  const id = req.body.id;
  await memberModel.deleteMember(id);

  res.status(200).send();
}); 

router.post('/update-member', async(req, res, next) => {
  await memberModel.updateMember(req.body);
  res.send();
});

module.exports = router;