const db = require("../db/db");
const util = require("util");
const TABLE_RESERVE = "PHIEUDATPHONG";

const db_query = util.promisify(db.query).bind(db);
const load = (sql) => db_query(sql);
const add = (entity, table) => db_query(`insert into ${table} set ?`, entity);
const del = (condition, table) =>
  db_query(`delete from ${table} where ?`, condition);
const patch = (entity, condition, table) =>
  db_query(`update ${table} set ? where ?`, [entity, condition]);

module.exports = {
  getAllRooms() {
    return load(
      `select * from phong p join loaiphong lp on p.maloaiphong = lp.maloaiphong order by p.sophong asc`
    );
  },

  getFormDataById(id) {
    return load(
      `select pdp.*, kh.*, p.*, lp.TenLoaiPhong, lp.Gia from ${TABLE_RESERVE} pdp join chitietthuephong ct on pdp.mathuephong = ct.mathuephong join phong p on ct.maphong = p.maphong join loaiphong lp on p.maloaiphong = lp.maloaiphong join khachhang kh on pdp.makh = kh.makh where pdp.mathuephong = '${id}'`
    );
  },

  async getFormById(id) {
    const rows = await load(
      `select * from ${TABLE_RESERVE} where mathuephong = '${id}'`
    );
    if (rows.length === 0) return null;

    return rows[0];
  },

  updateForm(bill) {
    const condition = { mathuephong: bill.MaThuePhong };
    return patch(bill, condition, TABLE_RESERVE);
  },

  async getRoomById(id) {
    const rows = await load(`select * from phong where maphong = '${id}'`);
    if (rows.length === 0) return null;

    return rows[0];
  },

  updateRoom(room) {
    const condition = { maphong: room.MaPhong };
    return patch(room, condition, "phong");
  },

  async addForm(customer, room, billDetails, user) {
    try {
      const customerDetail = await add(customer, "khachhang");

      const bill = {
        SoPhong: room.MaPhong,
        NgayDen: billDetails.dateIn,
        NgayDi: billDetails.dateOut,
        SoNguoi: billDetails.numberCustomer,
        MaKH: customerDetail.insertId,
        MaNV: +user.id,
        TenDangNhap: user.username,
        MaKhachSan: +user.hotelCode,
        GhiChu: billDetails.note,
      };
      const billDetail = await add(bill, TABLE_RESERVE);
      await add(
        { maphong: room.MaPhong, mathuephong: billDetail.insertId },
        "chitietthuephong"
      );
      room.MaThuePhongHienTai = billDetail.insertId;
      room.TinhTrang = "busy";
      const condition = { maphong: room.MaPhong };
      delete room.TenLoaiPhong;
      delete room.Gia;
      delete room.SoNguoi;
      delete room.MaKhachSan;
      await patch(room, condition, "phong");

      return billDetail.insertId;
    } catch (err) {
      console.log(err);
    }
  },
};
