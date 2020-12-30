import "../../Styles/Dashboard.scss";
import React, { useState, useEffect } from "react";
import server from "../../server";
const axios = require("axios");
const numeral = require("numeral");
const moment = require("moment");

const RoomSelectorContent = ({ data, status }) => {
  const getBackground = () => {
    if (status === "busy")
      return {
        backgroundColor: "rgba(191, 217, 247, 0.925)",
        color: "rgb(68, 53, 206)",
      };
    else if (status === "dirty")
      return { backgroundColor: "rgb(209, 209, 209)", color: "white" };

    return {};
  };

  const getContent = () => {
    if (data && status === "busy") {
      return (
        <div className="room-selector-content" style={getBackground()}>
          <div className="time">
            <div>
              {moment(data.NgayDen, "YYYY-MM-DDThh:mm:ssZ").format(
                "YYYY-MM-DD"
              )}
            </div>
            <div>-</div>
            <div>
              {moment(data.NgayDi, "YYYY-MM-DDThh:mm:ssZ").format("YYYY-MM-DD")}
            </div>
          </div>
          <div>{data.TenKH}</div>
          <div>{numeral(data.Gia).format(0, 0)} VND</div>
        </div>
      );
    }
    return (
      <div className="room-selector-content" style={getBackground()}>
        <span>Trống</span>
      </div>
    );
  };

  return getContent();
};

export default RoomSelectorContent;
