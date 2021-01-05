const db = require("../db/db");
const util = require("util");
const TABLE_BILL = "HOADON";

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) =>
  db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
  db_query(`update ${table} set ? where ?`, [entity, condition]);

module.exports = {
  addBill(bill) {
    return add(bill, TABLE_BILL);
  },
};
