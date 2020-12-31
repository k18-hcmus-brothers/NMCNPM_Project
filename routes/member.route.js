const express = require('express');
const router = express.Router();
const roleModel = require('../models/role.model');
const memberModel = require('../models/member.model');

router.get('/roles', async(req, res, next) => {
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

router.get('/members', async(req, res, next) => {
  const members = await memberModel.getAllMembers();

  res.send(members);
});

module.exports = router;