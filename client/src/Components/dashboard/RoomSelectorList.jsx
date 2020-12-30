import RoomSelector from "./RoomSelector";
import React, { useState, useEffect } from "react";
import server from "../../server";

const axios = require("axios");

const RoomSelectorList = () => {
  const [roomsList, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(server + "/dashboard/rooms");
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
