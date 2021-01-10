import React, { useState, useEffect } from "react";
import "../Styles/Login.scss";
import { Redirect, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import server from "../server";
import { faKey, faUserAlt } from "@fortawesome/free-solid-svg-icons";

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
        let respone = new Response();
        try {
            respone = await axios.post(server + '/users/login', user);
            sessionStorage.setItem("JWT", respone.data.token);
            sessionStorage.setItem('role', respone.data.role)
            props.onSetUser(respone.data.token);
            history.push({ pathname: '/' });
        }
        catch (error) {
            alert("Sai tên đăng nhập hoặc mật khẩu");

        }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      const respone = await axios.post(server + "/users/login", user);
      sessionStorage.setItem("JWT", respone.data.token);
      sessionStorage.setItem("role", respone.data.role);
      props.onSetUser(respone.data.token);
      history.push({ pathname: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  const RenderLogInPage = () => {
    return (
      <div>
        <div className="login-wrapper">
          <div className="card px-4 shadow">
            <div className="header text-center">
              <h3>Sign In</h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className="form mt-5 d-flex flex-column"
            >
              <div>
                <div className="form-group row">
                  <FontAwesomeIcon className="col-sm-2 icon" icon={faUserAlt} />
                  <input
                    className="form-control form-control-lg col-sm-10"
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group row">
                  <FontAwesomeIcon className="col-sm-2 icon" icon={faKey} />
                  <input
                    className="form-control form-control-lg col-sm-10"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block shadow align-self-center mt-5 submit-button"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return RenderLogInPage();
}

export default Login;
