import RoomSelector from "./RoomSelector";
import React, { useState, useEffect } from "react";
import server from "../../server";

const axios = require("axios");

const RoomSelectorList = () => {
  let accessString = sessionStorage.getItem("JWT");

  const [roomsList, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(server + "/dashboard/rooms", {
        headers: {
          Authorization: `JWT ${accessString}`,
        },
      });
      console.log(result);
      setRooms(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard mt-2 row row-cols-sm-4">
      {roomsList.map((room) => {
        return <RoomSelector key={room.MaPhong} data={room} />;
      })}
    </div>
  );
};

export default RoomSelectorList;
