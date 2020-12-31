const express = require('express');
const router = express.Router();
const roleModel = require('../models/role.model');

router.get('/roles', async(req, res, next) => {
  const roles = await roleModel.getAllRoles();

  const result = [];

  roles.forEach( async (role) => {
    result[role.TenVaiTro]
    let abilities = await roleModel.getAbilities(role.MaVaiTro);
    abilities = abilities.map(item => item.machucnang);
    console.log(abilities);
  });


  res.send(roles);
});


module.exports = router;