const db = require(`../db/db`);
const util = require("util");
const { type } = require("os");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition1, condition2, table) =>{
    db_query(`delete from ${table} where ? and ?`, [condition1, condition2]);}
const patch = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);
const search = (name) => db_query(`select * from thietbi where TenThietBi='${name.TenThietBi}'`);
const addval=(val,table)=>db_query(`insert into ${table} (TenThietBi,GiaThietBi) values ('${val.TenThietBi}','${val.GiaThietBi}')`);


exports.getAllRoom = async () => {
    const query = `select * from loaiphong join phong on loaiphong.MaLoaiPhong =phong.MaLoaiPhong`;
    const room = await load(query);
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

exports.getFurRoomNor = async () => {
    const query = `select thietbi.MaThietBi, TenThietBi from chitietthietbi join thietbi on chitietthietbi.MaThietBi=thietbi.MaThietBi where MaLoaiPhong=1 and SoLuong != 0`
    const fur = await load(query);
    return fur;
}

exports.getFurRoomVip = async () => {
    const query = `select thietbi.MaThietBi, TenThietBi from chitietthietbi join thietbi on chitietthietbi.MaThietBi=thietbi.MaThietBi where MaLoaiPhong=2 and SoLuong != 0`
    const fur = await load(query);
    return fur;
}

exports.updatePrice = async (edtPrice) => {
    await patch({ Gia: edtPrice.Gia }, { MaLoaiPhong: edtPrice.MaLoaiPhong }, "loaiphong");
    return;
}

exports.editFurniture = async (edtFurniture) => {
    await del({ MaThietBi: edtFurniture.MaThietBi }, { MaLoaiPhong: edtFurniture.MaLoaiPhong }, "chitietthietbi");
    return;
}

exports.addFur = async (addfu, MLP) => {
    const noithat = {
        TenThietBi: addfu
    }
    const a=await search(noithat);
    if (a.length !== 0) {
        const thietbicu = {
            MaThietBi: a[0].MaThietBi,
            MaLoaiPhong: MLP,
            SoLuong: 10,
        }
        await add(thietbicu, 'chitietthietbi');
    } else {
        const thietbimoi = {
            TenThietBi: addfu,
            GiaThietBi:100000
        };
        const c=await addval(thietbimoi, 'thietbi');
        const thietbimoithem = await search(noithat);
        const them = {
            MaThietBi: thietbimoithem[0].MaThietBi,
            MaLoaiPhong: MLP,
            SoLuong: 10
        };
        const u = await add(them, 'chitietthietbi');
        return;
    }

}