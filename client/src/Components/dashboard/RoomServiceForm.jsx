const numeral = require("numeral");

const RoomServiceForm = ({ data }) => {

  const handleSubmit = () => {

  }

  return (
    <form
      className="d-flex flex-column card"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="card-header text-center text-white font-weight-bold bg-primary">
        Phòng {data.SoPhong}
      </div>
      <div className="row mt-4">
        <div className="row col-12">
          <div className="col-3">Tên dịch vụ</div>
          <div className="col-2">Số lượng</div>
          <div className="col-2">Giá</div>
          <div className="col-3">Ghi chú</div>
          <div className="col-2">Hành động </div>
        </div>
        <div className="row col-12">
          <select name="tenDichVu" id="tenDichVu" className="col-3">

          </select>
          <input type="number" className="col-2" />
          <input type="number" className="col-2" />
          <input type="text" className="col-3" />
          <div className="col-2">
            <button className="btn btn-primary">OK</button>
            <button className="btn btn-primary">NO</button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <table className="table table-hover table-borderless row col-12">
          <thead className="member-thead">
            <tr className="d-flex">
              <th className="col-3">Tên dịch vụ</th>
              <th className="col-2">Số lượng</th>
              <th className="col-2">Giá</th>
              <th className="col-3">Ghi chú</th>
              <th className="col-2">Hành động</th>
            </tr>
          </thead>

          
        </table>
      </div>

      <div className="align-self-end m-3">
        <button className="btn btn-outline-danger mr-1">
          Huỷ Bỏ
        </button>
        <button type="submit" className="btn btn-primary">
          Thanh Toán
        </button>
      </div>
    </form>
  );
};

export default RoomServiceForm;
