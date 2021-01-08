import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import server from '../server';

function Login(props) {
    const history = useHistory();
    // const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('JWT')) {
            history.push({ pathname: '/' });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            const respone = await axios.post(server + '/users/login', user);
            sessionStorage.setItem("JWT", respone.data.token);
            sessionStorage.setItem('role', respone.data.role)
            props.onSetUser(respone.data.token);
            history.push({ pathname: '/' });
        }
        catch (error) {
            console.log(error);
        }

    };

    const RenderLogInPage = () => {
        return (
            <div>
                <div className="splash-container">
                    <div className="card ">
                        <div className="card-header text-center">
                            <span className="splash-description">Please enter your user information.</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input className="form-control form-control-lg" name="username" id="username" type="text" placeholder="Username" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control form-control-lg" name="password" id="password" type="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    return (

        RenderLogInPage()

    );

}

export default Login
