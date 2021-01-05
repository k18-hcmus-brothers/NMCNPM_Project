import RoomSelectorTag from "./RoomSelectorTag";
import "../../Styles/Dashboard.scss";
import RoomSelectorContent from "./RoomSelectorContent";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import RoomBookingForm from "./RoomBookingForm";
import server from "../../server";
import RoomPaymentForm from "./RoomPaymentForm";
const axios = require("axios");
const moment = require("moment");

const RoomSelector = ({ data }) => {
  const [status, setStatus] = useState(data.TinhTrang);
  const [currentBill, setBill] = useState(data.MaThuePhongHienTai);
  const [billInfo, setBillInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentBill !== null) {
          const bill = await axios.get(server + "/dashboard/bill", {
            params: {
              id: currentBill,
            },
          });
          console.log(currentBill);
          setBillInfo(bill.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentBill]);

  const updateNote = async (note) => {
    try {
      await axios.post(server + "/dashboard/bill/note", {
        id: billInfo.MaThuePhong,
        note: note,
      });

      const bill = { ...billInfo };
      bill.GhiChu = note;
      setBillInfo(bill);
    } catch (err) {
      console.log(err);
    }
  };

  const getPopUpForm = (close) => {
    if (status === "ok") {
      return (
        <RoomBookingForm data={data} close={close} checkIn={checkInRoom} />
      );
    } else if (status === "busy") {
      return (
        <RoomPaymentForm
          data={billInfo}
          close={close}
          checkOut={checkOutRoom}
          updateNote={updateNote}
        />
      );
    }
    return;
  };

  const checkOutRoom = async (price, MaKH, MaThuePhong) => {
    try {
      const bill = {
        TienThanhToan: price,
        NgayThanhToan: moment(new Date(), "YYYY-MM-DDThh:mm:ssZ").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        TenDangNhap: "nguyen123",
        MaKhachSan: 1,
        MaKH: MaKH,
        MaThuePhong: MaThuePhong,
        MaPhong: data.MaPhong,
      };
      const res = await axios.post(server + "/dashboard/bill/payment", bill);

      setBill(null);
      setStatus("ok");
    } catch (err) {
      console.log(err);
    }
  };
  const checkInRoom = async (statesManager, dateIn, dateOut) => {
    try {
      let dataPackage = {
        user: {
          username: "nguyen123",
          id: 51,
          hotelCode: 1,
        },
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
          note: statesManager.note.value,
        },
      };

      const response = await axios.post(
        server + "/dashboard/addBill",
        dataPackage
      );
      console.log(response);
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
          <RoomSelectorContent data={billInfo} status={status} />
        </div>
      }
      modal={status !== "dirty"}
      nested
      closeOnDocumentClick
    >
      {(close) => getPopUpForm(close)}
    </Popup>
  );
};

export default RoomSelector;
