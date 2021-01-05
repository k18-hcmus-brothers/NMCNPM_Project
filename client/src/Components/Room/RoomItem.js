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

    const onInputChangegia = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            if (window.confirm('Không được để trống')) {
                return;
            }
        } else if (value <= 0) {
            if (window.confirm('Giá không hợp lệ')) {
                return;
            }
        } else {
            rooms.forEach(element => {
                element.gia = value;
            });
        }
    }

    const onInputChangnoithat = (e) => {
        const value = e.target.value;
        if (value === "") {
            if (window.confirm('Không được để trống')) {
                return;
            }
        } else {
            const res = value.split(",");
            rooms.forEach(element => {
                element.noithat = res;
            })
        }
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
                        <h3>Phòng {rooms[0].Loai}</h3>
                        <h3>Kích thước: {roomit.kickthuoc}m2</h3>
                        <h4>{roomit.view}</h4>
                        <h3>Nội thất phòng</h3>
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

    const luuupdategia = async (e) => {
        e.preventDefault();
        //await props.updatePrice(rooms);
        setisUpdategia(false);
    }

    const Updategiadefaultview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div>Giá Phòng: {updateif.gia}</div>
                <button className="btnupdate" onClick={updategia}>Chỉnh sửa</button>
            </div>
        )
    }

    const UpdategiaEditview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div> Giá Phòng:</div>
                <label>
                    <input type="text" name="gia" defaultValue={rooms[0].gia} onChange={onInputChangegia} />
                </label>
                <div className="btn_luachon">
                    <button className="btn btn-success" onClick={luuupdategia}>Lưu</button>
                    <button className="btn btn-primary" onClick={updategia}>Hủy</button>
                </div>

            </div>
        )
    }

    const updatenoithat = () => {
        if (isUpdatenoithat === false)
            setisUpdatenoithat(true);
        else setisUpdatenoithat(false);
    }

    const luuupdatenoithat = async (e) => {
        e.preventDefault();
        //await props.updateFurniture(rooms[0].noithat);
        setisUpdatenoithat(false);

    }

    const Updatenoithatdefaultview = () => {
        const updateif = rooms[0];
        const roomnoithat = rooms[0].noithat;
        const Roomnoithat = roomnoithat.map((item) => { return <Noithatitem key={item.id} name={item.id} value={item} /> });
        return (
            <div>
                <div className="updateItem">
                    <div>Nội thất phòng</div>
                    <button className="btnupdate" onClick={updatenoithat}>Chỉnh sửa</button>
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
        const Roomnoithat = roomnoithat.map((item) => { return <Noithatitem key={item.id} name={item.id} value={item} luuupdatenoithat={luuupdatenoithat} /> });
        return (
            <div>
                <div className="updateItem">
                    <div>Nội thất phòng</div>
                </div>
                <div className="infonoithat">
                    <textarea cols="50" rows="10" defaultValue={roomnoithat} onChange={onInputChangnoithat}>

                    </textarea>
                    <div className="btn_luachon">
                        <button className="btn btn-success" onClick={luuupdatenoithat}>Lưu</button>
                        <button className="btn btn-primary" onClick={updatenoithat}>Hủy</button>
                    </div>

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
                    {roomif.map((room) => { return <Room key={room.id} name={room.id} roomit={room} luuupdategia={luuupdategia} /> }
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
                <button className="btninfoRoom" onClick={handleInfo_Click}>Thông tin</button>
                <button className="btnupdateRoom" onClick={handleUpdate_Click}>Cập nhật</button>
            </div>
            <div className="eachroom">
                <Greeting />
            </div>

        </div>
    );

}

export default ListRoomItem;