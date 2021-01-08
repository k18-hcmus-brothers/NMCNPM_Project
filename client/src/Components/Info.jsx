import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import axios from 'axios'
import server from '../server';

function Info() {
    const [user, setUser] = useState({});
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        checkNewPassword: ""
    });

    useEffect(() => {
        console.log("use effect")
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

        fetchUserData();
    }, []);

    const toggleChangePassword = () => {
        setIsChangePassword(prevState => {
            console.log(prevState);
            return !prevState;
        });
    }

    const handlePasswordChange = (e) => {
        setPassword(prevState => {
            const updatedPassword = {...prevState};
            updatedPassword[e.target.name] = e.target.value;
            
        });
    }

    const changePassword = (e) => {

    }

    const renderInfomationCard = () => {
        return (
            <div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="user-avatar text-center d-block">
                                <img src="#" alt="User Avatar" className="rounded-circle user-avatar-xxl" />
                            </div>
                            <div className="text-center">
                                <h2 className="font-24 mb-0">{user.TenNV}</h2>
                                <p>Project Manager @Influnce</p>
                            </div>
                        </div>
                        <div className="card-body border-top col-12">
                            <div className="col-3">
                                <h3 className="font-16">Số điện thoại</h3>
                                <input name="SDT" value={user.SDT} readOnly />
                            </div>
                        </div>
                        <button type="button" onClick={toggleChangePassword}>Đổi mật khẩu </button>

                    </div>
                    {isChangePassword &&
                    <div >
                        <div>
                            <label >Mật khẩu hiện tại</label>
                            <input type="password" name="currentPassword" onChange={handlePasswordChange} value={password.currentPassword}/>
                        </div>
                        <div>
                            <label >Mật khẩu mới</label>
                            <input type="password" name="newPassword" onChange={handlePasswordChange} value={password.newPassword}/>
                        </div>
                        <div>
                            <label >Nhập lại mật khẩu mới</label>
                            <input type="password" name="checkNewPassword" onChange={handlePasswordChange} value={password.checkNewPassword}/>
                        </div>
                        <button type="butotn" onClick={changePassword}>Lưu</button>
                    </div>}
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
