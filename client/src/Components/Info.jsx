import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import axios from 'axios'
import server from '../server';
import {FaKey} from 'react-icons/fa'
import { Redirect, useHistory } from "react-router-dom";


function Info() {
    
    const history = useHistory();
    const [user, setUser] = useState({});
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        checkNewPassword: ""
    });

    const fetchUserData = async () => {
        let accessString = sessionStorage.getItem('JWT');
        const respone = await axios({
            method: 'get',
            url: server + "/users/findUser",
            headers: {
                Authorization: `JWT ${accessString}`,
            },
        });
        setUser(respone.data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);


    const handlePasswordChange = (e) => {
        setPassword(prevState => {
            const updatedPassword = { ...prevState };
            // console.log(prevState);
            // console.log(e.target.name, e.target.value);
            updatedPassword[e.target.name] = e.target.value;
            return updatedPassword;
        });
    }

    const changePassword = async () => {
        let accessString = sessionStorage.getItem('JWT');
        if (password.newPassword !== password.checkNewPassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không giống nhau.");
        }
        else if (password.currentPassword !== user.MatKhau) {
            alert("Sai mật khẩu hiện tại");
        }
        else {
            const respone = await axios({
                method: 'post',
                url: server + '/users/change-password',
                data: password,
                headers: {
                    Authorization: `JWT ${accessString}`,
                }
            });
            // console.log(respone);
            if (respone.status == 200) {
                alert("Đổi mật khẩu thành công");
                fetchUserData();
                history.push('/');
            }
        }
    }

    const renderInfomationCard = () => {
        return (
            <div>
                <div className="col-12">
                    <div className="card mt-5">
                        <div className="card-header info">
                            <h3 className="card-title font-weight-bold">Đổi mật khẩu</h3>
                        </div>
                        <div className="card-body  col-12">
                            <div >
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input id="old-password" type="password" className="form-control" placeholder="nhập mật khẩu cũ"
                                        name="currentPassword" onChange={handlePasswordChange} value={password.currentPassword}/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input id="old-password" type="password" className="form-control" placeholder="nhập mật khẩu mới"
                                        name="newPassword" onChange={handlePasswordChange} value={password.newPassword} />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FaKey/></span>
                                    </div>
                                    <input id="old-password" type="password" className="form-control" placeholder="xác nhận mật khẩu mới"
                                        name="checkNewPassword" onChange={handlePasswordChange} value={password.checkNewPassword}  />
                                </div>
                                
                                <button className="btn btn-primary" type="button" onClick={changePassword}>Lưu</button>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        );
    }

    return (
        <div className="wrapper">
            <Sidebar />
            <div>
                <Navigation />
                {renderInfomationCard()}
            </div>

        </div>
    )
}

export default Info
