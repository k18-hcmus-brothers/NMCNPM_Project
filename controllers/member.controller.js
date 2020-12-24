const memberModel = require('../models/member.model')


exports.index = function(req, res, next) {
    memberModel.list(function(err,  result) {
        if (err) throw err
        res.send(result)
    })
}

exports.delete = function(req, res, next) {
    res.send("message");
}