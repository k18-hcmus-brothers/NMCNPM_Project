const serviceModel = require('../models/room.model')


exports.index = function(req, res, next) {
    serviceModel.list(function(err,  result) {
        if (err) throw err
        res.send(result)
    })
}