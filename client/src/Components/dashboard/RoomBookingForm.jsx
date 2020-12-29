import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import FormError from "./FormError";

const numeral = require("numeral");

const initialState = {
  name: {
    value: "",
    errorMessage: "",
  },
  id: {
    value: "",
    errorMessage: "",
  },
  phone: {
    value: "",
    errorMessage: "",
  },
  numberCustomer: {
    value: "",
    errorMessage: "",
  },
  note: {
    value: "",
    errorMessage: "",
  },
};

const RoomBookingForm = ({ data, close, checkIn }) => {
  const [dateIn, setDateIn] = useState(new Date());
  const [dateOut, setDateOut] = useState(new Date());

  const [statesManager, setStatesManager] = useState(initialState);

  const handleDateInput = () => {
    if (dateIn > dateOut) return "Ngày đến phải trước ngày đi.";
    return "";
  };

  const validateInput = (type, value) => {
    switch (type) {
      case "name": {
        if (value.length === 0) return "Tên không được để trống.";
        else return "";
      }
      case "phone": {
        const regexp = /^\d{10,11}$/;
        const checkingResult = regexp.exec(value);
        if (checkingResult !== null) {
          return "";
        } else {
          return "Số điện thoại phải có 10 - 11 chữ số.";
        }
      }
      case "id": {
        if (value.length === 0) return "CMND/Passport không hợp lệ.";
        return "";
      }
      case "numberCustomer": {
        if (+value <= 0) return "Số người ở phải lớn hơn 0";
        return "";
      }
      default:
        return "";
    }
  };

  const handleInputValidation = (event, onBlur = true, type = null) => {
    let name;
    if (onBlur) {
      name = event.target.name;
    } else {
      name = type;
    }

    const errorMessage = validateInput(name, statesManager[name].value);
    const newState = { ...statesManager[name] }; /* dummy object */
    newState.errorMessage = errorMessage;
    setStatesManager((prevState) => ({ ...prevState, [name]: newState }));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...statesManager[name] }; /* dummy object */
    newState.value = value;
    setStatesManager((prevState) => ({ ...prevState, [name]: newState }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;
    // check input text
    for (let key in statesManager) {
      if (!statesManager.hasOwnProperty(key)) continue;

      handleInputValidation(event, false, key);
      if (statesManager[key].errorMessage.length > 0) hasError = true;
    }

    // check date time
    if (handleDateInput().length > 0) hasError = true;

    if (!hasError) {
      try {
        await checkIn(statesManager, dateIn, dateOut);
        close();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form
      className="d-flex flex-column card"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="card-header text-center text-white font-weight-bold bg-primary">
        Phòng {data.id}
      </div>
      <div className="row w-100 card-body">
        <div className="col-sm-6">
          <label htmlFor="exampleFormControlSelect1">Giá phòng</label>
          <div className="form-group row">
            <select
              className="form-control col-sm-8"
              id="exampleFormControlSelect1"
            >
              <option>Giá Chuẩn</option>
              <option>Giá VIP</option>
            </select>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="price"
                value={numeral(500000).format(0, 0)}
                name="price"
                readOnly
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6 w-100">
              Ngày đến:
              <DateTimePicker
                onChange={setDateIn}
                value={dateIn}
                name="dateIn"
              />
            </div>
            <div className="col-sm-6 w-100">
              Ngày đi:
              <DateTimePicker
                onChange={setDateOut}
                value={dateOut}
                name="dateOut"
              />
            </div>
            <FormError
              isHidden={handleDateInput().length > 0 ? false : true}
              errorMessage={handleDateInput()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Ghi chú</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="note"
            ></textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Họ và tên</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nhập tên khách hàng..."
              name="name"
              onChange={handleInput}
              onBlur={handleInputValidation}
              autoFocus
            />
            <FormError
              isHidden={statesManager.name.isInputValid}
              errorMessage={statesManager.name.errorMessage}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">CMND/Passport</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Nhập CMND/Passport"
              name="id"
              onChange={handleInput}
              onBlur={handleInputValidation}
            />
            <FormError
              isHidden={statesManager.id.isInputValid}
              errorMessage={statesManager.id.errorMessage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput3">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="0123456789"
              name="phone"
              onChange={handleInput}
              onBlur={handleInputValidation}
            />
            <FormError
              isHidden={statesManager.phone.isInputValid}
              errorMessage={statesManager.phone.errorMessage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Số người</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput4"
              placeholder="Nhập số người sẽ ở"
              name="numberCustomer"
              onChange={handleInput}
              onBlur={handleInputValidation}
            />
            <FormError
              isHidden={statesManager.numberCustomer.isInputValid}
              errorMessage={statesManager.numberCustomer.errorMessage}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between w-100">
        <div className="m-3">
          <button
            className="btn btn-outline-danger mr-1"
            onClick={() => {
              close();
            }}
          >
            Huỷ
          </button>
        </div>
        <div className="m-3">
          <button className="btn btn-outline-primary mr-1">Đặt phòng</button>
          <button type="submit" className="btn btn-primary">
            Nhận phòng
          </button>
        </div>
      </div>
    </form>
  );
};

export default RoomBookingForm;
