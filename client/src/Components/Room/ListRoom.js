import React, { useState, useEffect } from 'react';
import ListRooomItem from './RoomItem';
import '../../Styles/Room.css';
import axios from 'axios';

import server from "../../server";

function ListRoom() {
    const [RoomDetail, setRoomDetail] = useState([]);
    const [loaiphong, setloaiphong] = useState(1);

    const fetchAllRoomData = async () => {
        const result = await axios(server + "/room/allroom");
        
        setRoomDetail(result.data);
    };

    useEffect(() => {

        fetchAllRoomData();
    }, []);

    if (RoomDetail.length!=0)
    {
        const handleRoom_Nor = () => {
            setloaiphong(1);
        }
    
        const handleRoom_Vip = () => {
            setloaiphong(2);
        }
    
        const Greetingroom = (props) => {
            const idroom = loaiphong;
    
             if (idroom == 1)
                 return <ListRooomItem fetchAllRoomData={fetchAllRoomData} rooms={RoomDetail[0]} />
             return <ListRooomItem fetchAllRoomData={fetchAllRoomData} rooms={RoomDetail[1]} />
            return;
        }
        return (
    
            <div className="loaiRoom">
                <h2>Loại Phòng:</h2>
                <div className="listbtnloaiphong">
    
                    <button className="btnloaiphong" onClick={handleRoom_Nor}>Phòng NOR</button>
                    <button className="btnloaiphong" onClick={handleRoom_Vip}>Phòng VIP</button>
                </div>
                <div className="giaodienphong">
                    <Greetingroom value={RoomDetail} />
                </div>
    
            </div>
    
        );
    }else {
        return (
            <div>
                <p>Không có phòng</p>
            </div>
        )
    }
    
    
}


export default ListRoom;