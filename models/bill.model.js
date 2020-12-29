const db = require("../db/db");
const util = require("util");
const TABLE_BILL = "PHIEUDATPHONG";

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
      `select * from phong p join loaiphong lp on p.maloaiphong = lp.maloaiphong`
    );
  },

  getBillById(id) {
    return load(
      `select * from ${TABLE_BILL} pdp join chitietthuephong ct on pdp.mathuephong = ct.mathuephong join phong p on ct.maphong = p.maphong join loaiphong lp on p.maloaiphong = lp.maloaiphong join khachhang kh on pdp.makh = kh.makh where pdp.mathuephong = '${id}'`
    );
  },

  async addBill(customer, room, billDetails) {
    try {
      const customerDetail = await add(customer, "khachhang");

      const bill = {
        SoPhong: room.MaPhong,
        NgayDen: billDetails.dateIn,
        NgayDi: billDetails.dateOut,
        SoNguoi: billDetails.numberCustomer,
        MaKH: customerDetail.insertId,
        MaNV: 1,
        TenDangNhap: "GAGA",
        MaKhachSan: 1,
      };
      const billDetail = await add(bill, TABLE_BILL);
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
