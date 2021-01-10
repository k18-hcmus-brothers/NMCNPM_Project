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

  let accessString = sessionStorage.getItem("JWT");
  const [status, setStatus] = useState(data.TinhTrang);
  const [currentBill, setBill] = useState(data.MaThuePhongHienTai);
  const [billInfo, setBillInfo] = useState(null);

  const [user, setUser] = useState({});
  const fetchUserData = async () => {
    let accessString = sessionStorage.getItem('JWT');
    const respone = await axios({
        method: 'get',
        url: server + "/users/findUser",
        headers: {
            Authorization: `JWT ${accessString}`,
        },
    });
    setUser(respone.data);
}

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("FetchBillInfo");
        if (currentBill !== null) {
          const bill = await axios.get(server + "/dashboard/bill", {
            params: {
              id: currentBill,
            },
            headers: {
              Authorization: `JWT ${accessString}`,
            },
          });
          // console.log(currentBill);
          setBillInfo(bill.data[0]);
          console.log(currentBill);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentBill]);

  const updateNote = async (note) => {
    try {
      await axios.post(
        server + "/dashboard/bill/note",
        {
          id: billInfo.MaThuePhong,
          note: note,
        },
        {
          headers: {
            Authorization: `JWT ${accessString}`,
          },
        }
      );

      const bill = { ...billInfo };
      bill.GhiChu = note;
      setBillInfo(bill);
    } catch (err) {
      console.log(err);
    }
  };

  const getPopUpForm = (close) => {
    console.log(status);
    if (status === "ok") {
      return (
        <RoomBookingForm data={data} close={close} checkIn={checkInRoom} />
      );
    } else if (status === "busy") {
      console.log(billInfo);
      return (
        <RoomPaymentForm
          data={billInfo}
          close={close}
          checkOut={checkOutRoom}
          updateNote={updateNote}
        />
      );
    }
    return (
      <div style={{ width: "300px" }}>
        <div className="m-2">
          <p>Xác nhận đã dọn phòng?</p>
          <div className="row">
            <button
              className="btn btn-primary mx-1"
              onClick={() => cleanRoom(close)}
            >
              Xác nhận
            </button>
            <button className="btn btn-danger mx-1 mr-5" onClick={close}>
              Huỷ bỏ
            </button>
          </div>
        </div>
      </div>
    );
  };

  const cleanRoom = async (close) => {
    console.log(close);
    const status = await axios({
      method: "post",
      url: server + "/dashboard/clean-room",
      data: {
        MaPhong: data.MaPhong,
      },
      headers: {
        Authorization: `JWT ${accessString}`,
      },
    });
    setStatus(status.data);
    close();
  };

  const checkOutRoom = async (price, MaKH, MaThuePhong) => {
    try {
      const bill = {
        TienThanhToan: price,
        NgayThanhToan: moment(new Date(), "YYYY-MM-DDThh:mm:ssZ").format(
          "YYYY-MM-DD hh:mm:ss"
        ),
        TenDangNhap: user.TenDangNhap,
        MaKhachSan: 1,
        MaKH: MaKH,
        MaThuePhong: MaThuePhong,
        MaPhong: data.MaPhong,
      };
      const res = await axios.post(server + "/dashboard/bill/payment", bill, {
        headers: {
          Authorization: `JWT ${accessString}`,
        },
      });

      setBill(null);
      setStatus("dirty");
    } catch (err) {
      console.log(err);
    }
  };
  const checkInRoom = async (statesManager, dateIn, dateOut) => {
    try {
      let dataPackage = {
        user: {
          username: user.TenDangNhap,
          id: user.MaNV,
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
        dataPackage,
        {
          headers: {
            Authorization: `JWT ${accessString}`,
          },
        }
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
