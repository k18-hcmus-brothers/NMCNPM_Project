import React, { useState } from 'react';
import '../../Styles/Room.css';
import axios from 'axios'

import server from '../../server'

function ListRoomItem(props) {
    const [btninfor, setbtninfor] = useState(true);
    const [rooms, setrooms] = useState(props.rooms);
    const [isUpdategia, setisUpdategia] = useState(false);
    const [gia, setgia] = useState();
    const [isUpdatenoithat, setisUpdatenoithat] = useState(false);
    const [serviceDetail, setServiceDetail] = useState(props.Service);
    const [isAddFur, setisAddFur] = useState(true);
    let thietbi="";
    const handleInfo_Click = () => {
        setbtninfor(true);
    }

    const handleUpdate_Click = () => {
        setbtninfor(false);
    }

    const handleAddFur = () => {
        setisAddFur(!isAddFur);
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
                element.Gia = value;
            });
        }
    }

    const onInputAddFur = (e) => {
        const value = e.target.value;
        
        if (value.length === 0) {
            if (window.confirm('Không được để trống')) {
                return;
            }
        }else{
            thietbi=value;
        }
    }

    const updatePrice = async (editprice) => {
        try {
            await axios.post(server + '/room/room-update-gia', editprice);

        }
        catch (err) {
            console.log(err);
            return;
        }

        //props.fetchAllRoomData();
    };

    const deleteFur = async (fur) => {
        try {
            await axios.post(server + '/room/room-del-noithat', fur);
            // refresh
            props.fetchAllRoomData();
        }
        catch (err) {
            console.log(err);
            return;
        }

        //await axios.get(server+'/room/getAllRoom')

    };

    const themFur = async (fur) => {
        try {
            await axios.post(server + '/room/room-add-fur', fur);
            // refresh
            props.fetchAllRoomData();
        }
        catch (err) {
            console.log(err);
            return;
        }

        //await axios.get(server+'/room/getAllRoom')

    };

    const Noithatitem = (props) => {
        const value = props.value[1];
        return (
            <li className="list-group-item">
                <table>
                    <tr>
                        <td>
                            {value}
                        </td>
                        <td classsName="d-flex justify-content-end">
                            <input type="button" className="btn btn-danger" name="IdFur" title={props.value[0]} value="Xóa" onClick={xoanoithat}></input>
                        </td>
                    </tr>
                </table>


            </li>
        );
    };

    const NoithatitemEdit = (props) => {
        const value = props.value;
        return (
            <li className="list-group-item">{value}</li>
        );
    };

    const Room = (props) => {
        const roomit = props.roomit;

        return (
            <div className="roomItem">
                <div className="roomList">
                    <div className="room">
                        <div className="roomName">Phòng {roomit.SoPhong}</div>
                    </div>
                </div>
            </div>
        )
    }

    const InfoItem = (props) => {
        const roomit = props.roomit;
        const roomnoithat = roomit.noithat;
        let Roomnoithat = roomnoithat.map((itemif) => {
            return (
                <div className="card">
                    <NoithatitemEdit key={itemif.id} name={itemif.id} value={itemif[1]} />
                </div>
            )
        })
        return (
            <div>
                <div className="roomItem">
                    <div className="card infoRoom">
                        <div className="card-header"><h5>Phòng {rooms[0].TenLoaiPhong}</h5> </div>
                        <div className="card-header"><h5>Kích thước: {roomit.kickthuoc}m2</h5></div>
                        <div className="card-body"><h6>{roomit.view}</h6></div>
                        <div className="card-header"><h5>Nội thất phòng</h5></div>
                        <div className="card-body">
                            <ul className="noithat">
                                {Roomnoithat}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    const updategia = async (e) => {
        setisUpdategia(!isUpdategia);

    }

    const luuupdategia = async (e) => {
        e.preventDefault();
        const gia = {
            Gia: rooms[0].Gia,
            MaLoaiPhong: rooms[0].MaLoaiPhong
        }
        await updatePrice(gia);
        setisUpdategia(false);
    }

    const xoanoithat = async (e) => {
        e.preventDefault();
        const noithat = {
            MaThietBi: e.target.title,
            MaLoaiPhong: rooms[0].MaLoaiPhong
        };
        await deleteFur(noithat);
        setisUpdategia(false);
    }

    const themnoithat=async(e)=>{
        e.preventDefault();
        const newFur={
            TenThietBi:thietbi,
            MaLoaiPhong:rooms[0].MaLoaiPhong
        };
        await themFur(newFur);
        setisAddFur(false);
    }

    const Updategiadefaultview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div className="card">
                    <div className="card-header"><h5>Giá Phòng:</h5> </div>
                    <h6>{updateif.Gia}</h6>
                </div>
                <button className="btn btn-primary btnupdate" onClick={updategia}>Chỉnh sửa</button>
            </div>
        )
    }

    const UpdategiaEditview = () => {
        const updateif = rooms[0];
        return (
            <div className="gdUpdategia">
                <div className="card">
                    <div className="card-header">
                        <h5>Giá Phòng:</h5>
                    </div>
                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={updateif.Gia} onChange={onInputChangegia} />
                    <div className="d-flex justify-content-xl-around">
                        <button className="btn btn-success" onClick={luuupdategia} on>Lưu</button>
                        <button className="btn btn-primary" onClick={updategia}>Hủy</button>
                    </div>
                </div>
            </div>
        )
    }


    const UpdatenoithatEditview = () => {
        const updateif = rooms[0];
        const roomnoithat = rooms[0].noithat;
        const Roomnoithat = roomnoithat.map((itemdv) => { return <Noithatitem key={itemdv.id} name={itemdv.id} value={itemdv} /> });
        return (
            <div className="card">
                <h5 className="card-header">Nội thất phòng:</h5>
                <div className="card-body">
                    <ul classsName="list-group list-group-flush">
                        {Roomnoithat}
                        <li className="list-group-item">
                            {isAddFur ? (<div><button className="btn btn-primary" onClick={handleAddFur}>Thêm nội thất</button></div>) : (<div>
                                <input type="text" className="form-control" placeholder="Tên Nội Thất" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onInputAddFur}></input>
                                <button className="btn btn-success" onClick={themnoithat} >Lưu</button>
                                <button className="btn btn-primary" onClick={handleAddFur}>Hủy</button>
                            </div>)}

                        </li>

                    </ul>
                </div>
            </div>
        )
    }

    const Updatenoithatphong = () => {
        return (
            <div>
                <UpdatenoithatEditview />
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
        if (rooms.length != 0) {
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
        } else {
            return (
                <div>
                    <h2>Chưa có phòng thuộc loại phòng này</h2>
                </div>
            );
        }

    }

    const Update = (props) => {
        if (rooms.length != 0) {
            return (
                <div className="updateInfo">
                    <div className="updateItem">
                        <Updategiaphong />
                    </div>
                    <Updatenoithatphong />
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Chưa có thông tin loại phòng này </h2>
                </div>
            );
        }

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