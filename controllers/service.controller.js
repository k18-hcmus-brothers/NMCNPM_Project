const serviceModel = require('../models/service.model')


exports.index = function(req, res, next) {
    serviceModel.list(function(err,  result) {
        if (err) throw err
        res.send(result)
    })
}

exports.delete = function(req, res, next) {
    res.send("message");
}