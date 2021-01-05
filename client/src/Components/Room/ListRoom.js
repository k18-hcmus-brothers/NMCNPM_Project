import React, { useState } from 'react';
import ListRooomItem from './RoomItem';
import '../../Styles/Room.css';
import axios from "axios";

import server from "../../server";

function ListRoom(props) {
    const room = Object.values(props)[0];
    const [loaiphong, setloaiphong] = useState(1);
    const roomthuong = room[0];
    const roomvip = room[1];


    const fetchRoomData = async () => {
        const result = await axios(server + "/room/room");
        setloaiphong(result.data);
    };

    const handleRoom_thuong = () => {
        setloaiphong(1);
    }

    const handleRoom_vip = () => {
        setloaiphong(2);
    }

    const updatePrice = async (editPriceRoom) => {
        try {
            await axios.post(server + '/room/edit-price-room', editPriceRoom);

        }
        catch (err) {
            console.log(err);
            return;
        }
        fetchRoomData();
    }

    const updateFurniture = async (editFurniture) => {
        try {
            await axios.post(server + '/room/edit-furniture-room', editFurniture);

        }
        catch (err) {
            console.log(err);
            return;
        }
        fetchRoomData();
    }

    const Greetingroom = (props) => {
        const idroom = loaiphong;

        if (idroom == 1)
            return <ListRooomItem rooms={roomthuong} />
        return <ListRooomItem rooms={roomvip} />
    }
    return (
        <div className="loaiRoom">
            <h2>Loại Phòng:</h2>
            <div className="listbtnloaiphong">
                <button className="btnloaiphong" onClick={handleRoom_thuong}>Phòng Đơn</button>
                <button className="btnloaiphong" onClick={handleRoom_vip}>Phòng Đôi</button>
            </div>
            <div className="giaodienphong">
                <Greetingroom value={room} />
            </div>

        </div>

    );

}


export default ListRoom;