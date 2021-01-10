import React, { useState, useEffect } from 'react'
import axios from 'axios'
import server from '../../server'

function AddRoomForm(props) {
    let [roomTypes, setRoomTypes] = useState([]);
    const [roomDetail, setRoomDetail] = useState({
        MaLoaiPhong: 1,
        SoPhong: ''
    });
    const fetchRoomType = async () => {
        const respone = await axios.get(server + '/room/room-type');
        console.log(respone.data);
        setRoomTypes(respone.data);
    }

    useEffect(() => {
        fetchRoomType();
    }, []);

    const onInputChange = (e) => {
        setRoomDetail(prevState => {
            const updateRoomDetail = { ...prevState };
            updateRoomDetail[e.target.name] = e.target.value;
            console.log(updateRoomDetail);
            return updateRoomDetail;
        });
    }

    const addRoom = async () => {
        roomDetail['MaLoaiPhong'] = + roomDetail['MaLoaiPhong'];
        const respone = await axios.post(server + '/room/add-room', roomDetail);
        if (respone.status == 200) {
            alert("Thêm phòng thành công");
            props.fetchAllRoomData();
        }
    }

    return (
        <div>
            <div className="col-12">
                <div className="card mt-5">
                    <div className="card-header info">
                        <h3 className="card-title font-weight-bold">Thêm phòng</h3>
                    </div>
                    <div className="card-body  col-12">
                        <div className="input-group form-group">
                            <div className="input-group-prepend col-1">
                                <label>Số phòng</label>
                            </div>
                            <input onChange={onInputChange} name="SoPhong"></input>
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend col-1">
                                <label>Loại phòng</label>
                            </div>
                            <select name="MaLoaiPhong" onChange={onInputChange} value={roomDetail.MaLoaiPhong}>
                                {roomTypes.map(roomType => {
                                    return (
                                        <option value={roomType.MaLoaiPhong} >{roomType.TenLoaiPhong}</option>
                                    );
                                })}
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addRoom}>Thêm phòng</button>
                                
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRoomForm
