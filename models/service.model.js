const db = require('../db/db');
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query('insert into ${table} set ?', entity);
const del = (condition, table) =>
    db_query('delete from ${table} where ?', condition);
const patch = (entity, condition, table) =>
    db_query('update ${table} set ? where ?', [entity, condition]);
exports.getAllService = async () => {
        const query = 'select * from dichvu';
        const service = await load(query);
        console.log("<<MEMBER MODEL>>",service);
        return service;
    }
exports.addService = async (newService) => {
        await add({MaDV: newService.MaDV,TenDV:newService.TenDV, Gia:newService.Gia}, "dichvu");
        return;
}