import React, { useState, useEffect  } from 'react';
import ListRooomItem from './RoomItem';
import '../../Styles/Room.css';
import axios from 'axios';

import server from "../../server";

function ListRoom() {
    const [RoomNor,setRoomNor]=useState([]);
    const [RoomVip,setRoomVip]=useState([]);
    const [loaiphong, setloaiphong] = useState(1);
    const [FurRoomNor,setFurRoomNor]=useState([]);
    const [FurRoomVip,setFurRoomVip]=useState([]);
    const [room,setRoom]=useState();

    const fetchRoomNorData = async () => {
        const result = await axios(server + "/room/roomNor");
        console.log("result room thuong",result.data);
        setRoomNor(result.data);
    };

    useEffect(() => {

        fetchRoomNorData();
    }, []);

    // const fetchRoomVipData = async () => {
    //     const result = await axios(server + "/room/roomVip");
    //     setRoomVip(result.data);
    // };
    // useEffect(() => {

    //     fetchRoomVipData();
    // }, []);

    // const fetchFurRoomNorData = async () => {
    //     const result = await axios(server + "/room/furrooomNor");
    //     setFurRoomNor(result.data);
    // };
    // useEffect(() => {

    //     fetchFurRoomNorData();
    // }, []);

    // const fetchFurRoomVipData = async () => {
    //     const result = await axios(server + "/room/furrooomVip");
    //     setFurRoomVip(result.data);
    // };
    // useEffect(() => {

    //     fetchFurRoomVipData();
    // }, []);

    for(room in RoomNor){
        room.noithat=FurRoomNor;
    }

    for(room in RoomVip){
        room.noithat=FurRoomVip;
    }

    const handleRoom_Nor = () => {
        setloaiphong(1);
    }

    const handleRoom_Vip = () => {
        setloaiphong(2);
    }


    const Greetingroom = (props) => {
        const idroom = loaiphong;

        if (idroom == 1)
            return <ListRooomItem rooms={RoomNor} />
        return <ListRooomItem rooms={RoomVip} />
    }
    return (
        
        <div className="loaiRoom">
            <h2>Loại Phòng:</h2>
            <div className="listbtnloaiphong">

                <button className="btnloaiphong" onClick={handleRoom_Nor}>Phòng Thường</button>
                <button className="btnloaiphong" onClick={handleRoom_Vip}>Phòng VIP</button>
            </div>
            <div className="giaodienphong">
                {/* <Greetingroom value={room} /> */}
            </div>

        </div>

    );

}


export default ListRoom;