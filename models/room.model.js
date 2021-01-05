const db = require(`../db/db`);
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const patchprice = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);
const patchfurniture = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);
exports.getAllService = async () => {
    const query = `select * from loaiphong join loaithietbi on loaiphong.MaLoaiPhong=loaithietbi.MaLoaiPhong as A join phong on A.MaLoaiPhong join phong.MaLoaiPhong`;
    const room = await load(query);
    return room;
}

exports.editPriceRoom = async (edtPrice) => {
    await patchprice({Gia: edtPrice.GiaDV }, { MaLoaiPhong: edtPrice.MaLoaiPhong, TenLoaiPhong: edtPrice.TenLoaiPhong }, "phong");
    return;
}

exports.editFurniture = async (edtFurniture) => {
    await patchfurniture({ TenLoaiThietBi: edtFurniture.TenLoaiThietBi}, { MaLoaiThietBi: edtFurniture.MaLoaiThietBi, MaLoaiPhong: edtFurniture.MaLoaiPhong}, "phong");
    return;
}