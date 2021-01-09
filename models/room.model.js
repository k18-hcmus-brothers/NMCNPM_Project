const db = require(`../db/db`);
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) =>
    db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);

exports.getAllRoom = async () => {
    const query = `select * from loaiphong join phong on loaiphong.MaLoaiPhong =phong.MaLoaiPhong`;
    const room = await load(query);
    console.log("<<Data Room Nor>>",room);
    return room;
}

exports.getRoomNor = async () => {
    const query = `select * from loaiphong join phong on loaiphong.MaLoaiPhong =phong.MaLoaiPhong where phong.MaLoaiPhong=1`
    const room = await load(query);
    return room;
}

exports.getRoomVip = async () => {
    const query = `select * from loaiphong join phong on loaiphong.MaLoaiPhong =phong.MaLoaiPhong where phong.MaLoaiPhong=2`
    const room = await load(query);
    return room;
}

exports.getFurRoonNor=async()=>{
    const query=`select from chitietthietbi where MaLoaiPhong=1 and SoLuong>0`
    const fur=await load(query);
    return fur;
}

exports.getFurRoonVip=async()=>{
    const query=`select from chitietthietbi where MaLoaiPhong=2 and SoLuong>0`
    const fur=await load(query);
    return fur;
}

exports.editPriceRoom = async (edtPrice) => {
    await patchprice({ Gia: edtPrice.GiaDV }, { MaLoaiPhong: edtPrice.MaLoaiPhong }, "mydb.loaiphong");
    return;
}

exports.editFurniture = async (edtFurniture) => {
    await patchfurniture({ TenLoaiThietBi: edtFurniture.TenLoaiThietBi }, { MaLoaiThietBi: edtFurniture.MaLoaiThietBi }, "phong");
    return;
}