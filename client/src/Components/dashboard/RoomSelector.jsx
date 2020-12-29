import RoomSelectorTag from "./RoomSelectorTag";
import "../../Styles/Dashboard.scss";
import RoomSelectorContent from "./RoomSelectorContent";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import RoomBookingForm from "./RoomBookingForm";
import server from "../../server";
const axios = require("axios");
const moment = require("moment");

const RoomSelector = ({ data }) => {
  const [status, setStatus] = useState(data.TinhTrang);
  const [currentBill, setBill] = useState(data.MaThuePhongHienTai);

  const getPopUpForm = (close) => {
    if (status === "ok") {
      return (
        <RoomBookingForm data={data} close={close} checkIn={checkInRoom} />
      );
    }
  };

  const checkInRoom = async (statesManager, dateIn, dateOut) => {
    try {
      console.log(dateIn);
      let dataPackage = {
        room: data,
        customer: {
          tenkh: statesManager.name.value,
          cmnd: statesManager.id.value,
          sdt: statesManager.phone.value,
        },
        billDetails: {
          dateIn: moment(dateIn, "YYYY-MM-DDThh:mm:ssZ").format(
            "YYYY-MM-DD hh:mm:ss"
          ),
          dateOut: moment(dateOut, "YYYY-MM-DDThh:mm:ssZ").format(
            "YYYY-MM-DD hh:mm:ss"
          ),
          numberCustomer: statesManager.numberCustomer.value,
        },
      };

      const response = await axios.post(
        server + "/dashboard/addBill",
        dataPackage
      );

      setBill(response.data);
      setStatus("busy");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Popup
      trigger={
        <div className="room-selector col">
          <RoomSelectorTag
            id={data.SoPhong}
            roomType={data.TenLoaiPhong}
            status={status}
          />
          <RoomSelectorContent billId={currentBill} status={status} />
        </div>
      }
      modal
      nested
      closeOnDocumentClick
    >
      {(close) => getPopUpForm(close)}
    </Popup>
  );
};

export default RoomSelector;
