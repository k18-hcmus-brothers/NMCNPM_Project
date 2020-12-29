const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "nguyen",
  password: "root",
  database: "khachsan"
});


db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = db