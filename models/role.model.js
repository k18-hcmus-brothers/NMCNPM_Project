const db = require('../db/db');
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) =>
  db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
  db_query(`update ${table} set ? where ?`, [entity, condition]);


exports.getAllRoles = async () => {
  const query = `select *
                 from vaitro`;
  const roles = await load(query);

  return roles;                                                              
}

exports.getAbilities = async (MaVaiTro) => {
  const query = `select machucnang
                 from vaitro vt join chucnang_vaitro cn_vt
                                on vt.mavaitro = cn_vt.mavaitro
                 where vt.mavaitro = ${MaVaiTro}`;
  const abilities = await load(query);
  return abilities;
}