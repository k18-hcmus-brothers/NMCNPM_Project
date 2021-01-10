const db = require(`../db/db`);
const util = require("util");

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) =>
    db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
    db_query(`update ${table} set ? where ?`, [entity, condition]);

exports.getAllService = async () => {
    const query = `select * from dichvu`;
    const service = await load(query);
    // console.log("<<Service MODEL>>", service);
    return service;
}
exports.addService = async (newService) => {
    const query = `select max(MaDV) 
    from dichvu`
    let Madv = await load(query);
    Madv = Madv[0]['max(MaDV)'] + 1;
    await add({ MaDV: Madv, TenDV: newService.TenDV, GiaDV: newService.GiaDV }, "dichvu");

    return;
}
exports.deleteService = async (delservice) => {
    console.log("<<DELETEModel>>", delservice);
    await del({ MaDV: delservice.MaDV }, "dichvu");
    return;
}
exports.editService = async (edtservice) => {
    if (edtservice.TenDV === " ") {
        await patch({ GiaDV: edtservice.GiaDV }, { MaDV: edtservice.MaDV }, "dichvu");
        return;
    }
    await patch({ TenDV: edtservice.TenDV, GiaDV: edtservice.GiaDV }, { MaDV: edtservice.MaDV }, "dichvu");
    return;
}


exports.getServicesByMaThuePhong = async (maThuePhong) => {
    const query = `select *
                   from sudungdichvu sddv join dichvu dv
                                          on sddv.MaDV = dv.MaDV
                   where MaThuePhong=${maThuePhong}
                   order by MaSuDungDichVu asc`
    const services = await load(query);
    return services;
} 


exports.appendService = async (data) => {
    await add({MaThuePhong: data.MaThuePhong, SoLuong: data.SoLuong, MaDV: data.MaDV, MaNV: data.MaNV, GhiChu: data.GhiChu}, "sudungdichvu")
}

exports.removeService = async (maSuDungDichVu) => {
    await del({MaSuDungDichVu: maSuDungDichVu}, "sudungdichvu");
}