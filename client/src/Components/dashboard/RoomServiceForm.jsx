import { useState } from 'react'

const numeral = require("numeral");

const RoomServiceForm = ({ data, close, services, listOfService, appendService, removeService }) => {
  const [currentSelect, setCurrentSelect] = useState(listOfService[0].MaDV);
  const [processingService, setProcessingService] = useState({
    MaThuePhong: data.MaThuePhong,
    MaDV: currentSelect,
    SoLuong: 1,
    MaNV: 51,
    GhiChu: ""
  });

  const onInputChange = (e) => {
    const name = e.target.name;
    if (name === "SoLuong") {
      let value = 1;
      if (e.target.value <= 0) { value = 1}
      else value = e.target.value;

      setProcessingService(prevState => {
        const updatedService = {...prevState}
        updatedService[name] = value;
        return (updatedService);
      })
    }

    else if (name === "GhiChu") {
      setProcessingService(prevState => {
        const updatedService = {...prevState}
        updatedService[name] = e.target.value;
        return (updatedService);
      })
    }
  }

  const onChangeService = (e) => {
    console.log(e.target.value);
    setCurrentSelect(e.target.value);
    setProcessingService(prevState => {
      const updatedService = {...prevState}
      updatedService[e.target.name] = e.target.value;
      return (updatedService);
    });
  }

  const handleAppendService = () => {
    appendService(processingService)
  }

  const handleRemoveService = (e) => {
    removeService(e.target.value);
  }

  return (
    <div>
      <div className="card-header text-center text-white font-weight-bold bg-primary">
        Phòng {data.SoPhong}
      </div>
      <div className="row mt-4">
        <div className="row col-12">
          <div className="col-3 font-weight-bold">Tên dịch vụ</div>
          <div className="col-1 font-weight-bold">SL</div>
          <div className="col-2 font-weight-bold">Đơn Giá</div>
          <div className="col-2 font-weight-bold">Giá</div>
          <div className="col-3 font-weight-bold">Ghi chú</div>
          <div className="col-1 font-weight-bold"></div>
        </div>
        <div className="row col-12">
          <select name="MaDV" id="MaDV" className="col-3" value={currentSelect} onChange={onChangeService}>
            {listOfService.map(service => {
              return (
                <option value={service.MaDV} >{service.TenDV}</option>
              );
            })}
          </select>
          <input type="number" className="col-1" name="SoLuong" value={processingService.SoLuong} onChange={onInputChange}/>
          <input type="number"  className="col-2" readOnly value={listOfService[currentSelect - 1].GiaDV}/>
          <input type="number" className="col-2" readOnly value={listOfService[currentSelect - 1].GiaDV * processingService.SoLuong}/>
          <input type="text" className="col-3" name="GhiChu" value={processingService.GhiChu} onChange={onInputChange}/>
          <div className="col-1">
            <button type="button" className="btn btn-primary" onClick={handleAppendService}>Thêm</button>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <table className="table table-hover table-borderless">
          <thead className="member-thead">
            <tr className="d-flex">
              <th className="col-3">Tên dịch vụ</th>
              <th className="col-2">Số lượng</th>
              <th className="col-2">Giá</th>
              <th className="col-3">Ghi chú</th>
              <th className="col-2"></th>
            </tr>
          </thead>
          <tbody className="member-tbody">
            {services.map(service => {
              return (
                <tr className="d-flex member-tr">
                  <td className="col-3">{service.TenDV}</td>
                  <td className="col-2">{service.SoLuong}</td>
                  <td className="col-2">{numeral(service.GiaDV * service.SoLuong).format(0,0)}</td>
                  <td className="col-3">{service.GhiChu}</td>
                  <td className="col-2">
                    <button type="button" className="btn btn-primary" value={service.MaSuDungDichVu} onClick={handleRemoveService}>Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      <div className="align-self-end m-3">
        <button type="button" className="btn btn-primary" onClick={close}>
          Trở lại
        </button>
      </div>
    </div>
  );
};

export default RoomServiceForm;
