import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import FormError from "./FormError";
import RoomServiceForm from "./RoomServiceForm";
import axios from "axios";
import server from "../../server";
const numeral = require("numeral");

const RoomPaymentForm = ({ data, close, checkOut, updateNote }) => {
  const [services, setServices] = useState([]);
  const [listOfService, setListOfService] = useState([]);
  const [totalPriceService, setTotalPriceService] = useState(0);

  const fetchServiceData = async () => {
    const response = await axios.get(
      server + "/service/get-service?mathuephong=" + data.MaThuePhongHienTai
    );
    console.log("<<RESPONE>>", response.data);
    setServices(response.data);
  };

  const fetchListOfService = async () => {
    const respone = await axios.get(server + "/service/service");
    console.log("Service");
    setListOfService(respone.data);
  };

  const appendService = async (newService) => {
    const respone = await axios.post(
      server + "/service/append-service",
      newService
    );

    fetchServiceData();
  };

  const removeService = async (maSuDungDichVu) => {
    const respone = await axios.post(server + "/service/remove-service", {
      maSuDungDichVu: maSuDungDichVu,
    });

    fetchServiceData();
  };

  useEffect(() => {
    if (data === null) return;
    fetchServiceData();
    fetchListOfService();
  }, []);

  useEffect(() => {
    let total = 0;
    services.forEach((service) => {
      total += service.SoLuong * service.GiaDV;
      setTotalPriceService(total);
    });
  }, [services]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (discount.errorMessage.length === 0) {
      checkOut(calculateTotalPrice(), data.MaKH, data.MaThuePhong);
      close();
    }
  };

  const [discount, setDiscount] = useState({ value: 0, errorMessage: "" });
  const [note, setNote] = useState(data ? data.GhiChu : null);

  const handleDiscountInput = (event) => {
    const newInstance = { ...discount };

    newInstance.value = event.target.value;
    setDiscount(newInstance);
  };

  const handleNoteInput = (event) => {
    setNote(event.target.value);
  };

  const validateDiscountInput = (event) => {
    if (discount.value < 0) {
      const newInstance = { ...discount };
      newInstance.errorMessage = "Giảm giá không được là số âm.";
      setDiscount(newInstance);
    } else if (discount.value > data.Gia * 2) {
      const newInstance = { ...discount };
      newInstance.errorMessage = "Giảm giá không được lớn hơn tổng tiền.";
      setDiscount(newInstance);
    } else {
      const newInstance = { ...discount };
      newInstance.errorMessage = "";
      setDiscount(newInstance);
    }
  };

  const calculateTotalPrice = () => {
    if (discount.errorMessage.length > 0) {
      return data.Gia + totalPriceService;
    }

    return data.Gia + totalPriceService - discount.value;
  };

  if (data === null || data === undefined) return <div></div>;
  return (
    <form
      className="d-flex flex-column card"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="card-header text-center text-white font-weight-bold bg-primary">
        Phòng {data.SoPhong}
      </div>
      <div className="row mt-4">
        <div className="form-group col-sm-6 row">
          <label className="col-sm-4">Họ và tên</label>
          <input
            type="text"
            className="form-control col-sm-8"
            value={data.TenKH}
            readOnly
          />
        </div>
        <div className="form-group col-sm-6 row">
          <label className="col-sm-4">CMND/Passport</label>
          <input
            type="text"
            className="form-control col-sm-8"
            value={data.CMND}
            readOnly
          />
        </div>
        <div className="form-group col-sm-6 row">
          <label className="col-sm-4">Số điện thoại</label>
          <input
            type="text"
            className="form-control col-sm-8"
            value={data.SDT}
            readOnly
          />
        </div>
        <div className="form-group col-sm-6 row">
          <label className="col-sm-4">Số người</label>
          <input
            type="text"
            className="form-control col-sm-8"
            value={data.SoNguoi}
            readOnly
          />
        </div>
        <div className="form-group col-sm-6 px-4">
          <label htmlFor="note">Ghi chú</label>
          <textarea
            className="form-control"
            id="note"
            rows="6"
            name="note"
            defaultValue={note}
            onChange={handleNoteInput}
            onBlur={async () => await updateNote(note)}
          ></textarea>
        </div>
        <div className="form-group col-sm-6 d-flex flex-column mt-5">
          <div className="row form-group">
            <label className="col-sm-4 pt-2">Giá Phòng</label>
            <input
              type="text"
              className="form-control col-sm-8"
              value={numeral(data.Gia).format(0, 0)}
              readOnly
            />
          </div>
          <div className="row form-group">
            <label className="col-sm-4 pt-2">Giá Dịch Vụ</label>
            <input
              type="text"
              className="form-control col-sm-8"
              value={numeral(totalPriceService).format(0, 0)}
              readOnly
            />
          </div>
          <div className="row form-group">
            <label className="col-sm-4 pt-2">Giảm Giá</label>
            <input
              type="number"
              className="form-control col-sm-8"
              onChange={handleDiscountInput}
              onBlur={validateDiscountInput}
            />
          </div>
          <FormError
            isHidden={discount.errorMessage.length > 0 ? false : true}
            errorMessage={discount.errorMessage}
          />
          <hr style={{ backgroundColor: "black", height: "1px" }} />
        </div>
        <div className="form-group col-sm-6">
          <Popup
            trigger={
              <button type="button" className="btn btn-primary">
                Dịch Vụ Phòng
              </button>
            }
            modal
            closeOnDocumentClick
          >
            {(close) => (
              <RoomServiceForm
                data={data}
                close={close}
                services={services}
                listOfService={listOfService}
                appendService={appendService}
                removeService={removeService}
              />
            )}
          </Popup>
        </div>
        <div className="form-group col-sm-6">
          <h2>Tổng tiền: {numeral(calculateTotalPrice()).format(0, 0)}</h2>
        </div>
      </div>
      <div className="align-self-end m-3">
        <button className="btn btn-outline-danger mr-1" onClick={close}>
          Huỷ Bỏ
        </button>
        <button type="submit" className="btn btn-primary">
          Thanh Toán
        </button>
      </div>
    </form>
  );
};

export default RoomPaymentForm;
