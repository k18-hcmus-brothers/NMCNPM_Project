const db = require('../db/db');
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) => 
    db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);

exports.getAllMembers = async () => {
    const query = `select * 
                   from nhanvien nv join hethong ht
                                    on nv.manv = ht.manv join vaitro vt
                                                         on nv.mavaitro = vt.mavaitro
                   order by nv.manv asc`;
    const members = await load(query);
    // console.log("<<MEMBER MODEL>>", members);
    return members;
}

exports.addMember = async (newMember) => {
    await add({TenNV: newMember.TenNV, MaVaiTro: +newMember.MaVaiTro, SDT: newMember.SDT}, "nhanvien");
    const query = `select max(MaNV) 
                   from nhanvien nv`
    let MaNV = await load(query);
    MaNV = MaNV[0]['max(MaNV)'];
    await add({TenDangNhap: newMember.TenDangNhap, MaKhachSan: 1, MatKhau: newMember.SDT, MaNV: +MaNV}, "hethong");
    return;
}

exports.deleteMember = async (id) => {
    console.log(id);
    await del({MaNV: +id}, "hethong");
    await del({MaNV: +id}, "nhanvien");
    return;
}

exports.findUserByUserName = async (username) => {
    const query = `select *
                   from nhanvien nv join hethong ht
                                    on nv.manv = ht.manv
                   where ht.tendangnhap = '${username}'
                   `;
    const user = await load(query);
    return user;
}

exports.changePassword = async (username, newPassword) => {
    await patch({MatKhau: newPassword}, {TenDangNhap: username}, "hethong")
}

exports.updateMember = async (userData) => {
    const MaNV = userData.MaNV;
    const updatedUserData = {
        MaVaiTro: +userData.MaVaiTro,
        SDT: userData.SDT,
        TenNV: userData.TenNV,

    }
    await patch(updatedUserData, {MaNV: MaNV}, "nhanvien");
}