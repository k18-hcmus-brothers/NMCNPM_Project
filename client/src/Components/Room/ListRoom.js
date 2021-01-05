import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ListRooomItem from './RoomItem'
import '../../Styles/Room.css';

function ListRoom(props) {
    const room = Object.values(props)[0];
    const [loaiphong, setloaiphong] = useState(1);
    const roomthuong = room[0];
    const roomvip = room[1];

    const handleRoom_thuong = () => {
        setloaiphong(1);
    }

    const handleRoom_vip = () => {
        setloaiphong(2);
    }

    const Greetingroom = (props) => {
        const idroom = loaiphong;

        if (idroom == 1)
            return <ListRooomItem rooms={roomthuong} />
        return <ListRooomItem rooms={roomvip} />
    }
    return (
        <div className="loaiRoom">
            <h2>Loai Phong:</h2>
            <div className="listbtnloaiphong">
                <button className="btnloaiphong" onClick={handleRoom_thuong}>Phong Thuong</button>
                <button className="btnloaiphong" onClick={handleRoom_vip}>Phong Vip</button>
            </div>
            <div className="giaodienphong">
                <Greetingroom value={room} />
            </div>

        </div>

    );

}


export default ListRoom;