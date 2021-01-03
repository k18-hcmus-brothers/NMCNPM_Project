const express = require('express');
const router = express.Router();
const serviceModel = require('../models/service.model');
router.get('/service', async(req, res, next) => {
    const service = await serviceModel.getAllService();
    
    res.send(service);
  });
  
  router.post('/add-service', async(req, res, next) => {
    const newService = req.body;
    await serviceModel.addService(newService);
  
    res.send();
  });
  router.post('/delete-service', async(req, res, next) => {
    const delservice = req.body;
    console.log("<<DELETERouter>>", delservice);
    await serviceModel.deleteService(delservice);
  
    res.send();
  });
  router.post('/edit-service', async(req, res, next) => {
    const edtService = req.body;
    await serviceModel.editService(edtService);
  
    res.send();
  });
module.exports = router;