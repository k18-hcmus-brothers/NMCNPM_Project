import React, { useState } from 'react';
import '../../Styles/Room.css';

function ListRoomItem(props) {
    const [btninfor, setbtninfor] = useState(true);
    const [rooms] = useState(props.rooms);
    const [isUpdategia, setisUpdategia] = useState(false);
    const [gia, setgia] = useState();
    const [isUpdatenoithat, setisUpdatenoithat] = useState(false);

    const handleInfo_Click = () => {
        setbtninfor(true);
    }

    const handleUpdate_Click = () => {
        setbtninfor(false);
    }

    const onInputChangegia=()=>{
        
    }

    const Noithatitem = (props) => {
        const value = props.value;
        return (
            <li>
                {value}
            </li>
        );
    };

    const Room = (props) => {
        const roomit = props.roomit;
        return (
            <div className="roomItem">
                <div className="roomList">
                    <div className="room">
                        <div className="roomName">{roomit.NameRoom}</div>
                    </div>
                </div>
            </div>
        )
    }

    const InfoItem = (props) => {
        const roomit = props.roomit;
        const roomnoithat = roomit.noithat;
        const Roomnoithat = roomnoithat.map((item) => { return <Noithatitem key={item.id} name={item.id} value={item} /> })
        return (
            <div>
                <div className="roomItem">

                    <div className="infoRoom">
                        <h3>Phong thuong</h3>
                        <h3>Kich thuoc: {roomit.kickthuoc}m2</h3>
                        <h4>{roomit.view}</h4>
                        <h3>Noi that phong</h3>
                        <ul className="noithat">
                            {Roomnoithat}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const updategia = () => {
        if (isUpdategia === false)
            setisUpdategia(true);
        else setisUpdategia(false);
    }

    const luuupdategia = () => {
        setisUpdategia(false);
    }

    const Updategiadefaultview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div>Gia Phong: {updateif.gia}</div>
                <button onClick={updategia}>Chinh sua</button>
            </div>
        )
    }

    const UpdategiaEditview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div> Gia Phong:</div>
                <label>
                    <input type="text" name="gia" placeholder={rooms[0].gia} onChange={onInputChangegia}/>
                </label>
                <button className="btn btn-success" onClick={luuupdategia}>Luu</button>
                <button className="btn btn-primary"onClick={updategia}>Huy</button>
            </div>
        )
    }

    const updatenoithat = () => {
        if (isUpdatenoithat === false)
            setisUpdatenoithat(true);
        else setisUpdatenoithat(false);
    }

    const luuupdatenoithat = () => {
        setisUpdatenoithat(false);

    }

    const Updatenoithatdefaultview = () => {
        const updateif = rooms[0];
        const roomnoithat = rooms[0].noithat;
        const Roomnoithat = roomnoithat.map((item) => { return <Noithatitem key={item.id} name={item.id} value={item} /> });
        return (
            <div>
                <div className="updateItem">
                    <div>Noi that phong</div>
                    <button onClick={updatenoithat}>Chinh sua</button>
                </div>
                <div className="infonoithat">
                    <ul>
                        {Roomnoithat}
                    </ul>
                </div>
            </div>
        )
    }

    const UpdatenoithatEditview = () => {
        const updateif = rooms[0];
        const roomnoithat = rooms[0].noithat;
        const Roomnoithat = roomnoithat.map((item) => { return <Noithatitem key={item.id} name={item.id} value={item} /> });
        return (
            <div>
                <div className="updateItem">
                    <div>Noi that phong</div>
                </div>
                <div className="infonoithat">
                    <textarea cols="50" rows="10" placeholder={roomnoithat}>

                    </textarea>
                    <button className="btn btn-success" onClick={luuupdatenoithat}>Luu</button>
                    <button className="btn btn-primary" onClick={updatenoithat}>Huy</button>
                </div>
            </div>
        )
    }

    const Updatenoithatphong = () => {
        if (isUpdatenoithat)
            return (<div>
                <UpdatenoithatEditview />
            </div>)
        return (<div>
            <Updatenoithatdefaultview />
        </div>)
    }

    const Updategiaphong = () => {
        if (isUpdategia)
            return (<div>
                <UpdategiaEditview />
            </div>)
        return (<div>
            <Updategiadefaultview />
        </div>)
    }

    const Info = (props) => {
        const roomif = rooms;
        return (
            <div className="gdphong">
                <div className="dsphong">
                    {roomif.map((room) => { return <Room key={room.id} name={room.id} roomit={room} /> }
                    )}
                </div>
                <div className="thongtinphong">
                    <InfoItem roomit={roomif[0]} />
                </div>
            </div>
        )
    }

    const Update = (props) => {
        return (
            <div className="updateInfo">
                <div className="updateItem">
                    <Updategiaphong />
                </div>
                <div className="updateItem">
                    <Updatenoithatphong />
                </div>
            </div>
        )
    }
    const Greeting = () => {
        const isinfo = btninfor;
        if (isinfo)
            return <Info rooms={rooms} />;
        return <Update />;
    }

    return (
        <div className="roombyloai">
            <div className="button-list">
                <button className="btninfoRoom" on={handleInfo_Click}>Thông tin</button>
                <button className="btnupdateRoom" onClick={handleUpdate_Click}>Cập nhật</button>
            </div>
            <div className="eachroom">
                <Greeting />
            </div>

        </div>
    );

}

export default ListRoomItem;