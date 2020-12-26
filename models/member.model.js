const db = require('../db/db')

exports.list = (callback) => {
    const query = 'SELECT * FROM LOAINHANVIEN';

    db.query(query, function(err, result) {
        if (err) throw err
        // console.log(result)
        callback(err, result)
    })
}