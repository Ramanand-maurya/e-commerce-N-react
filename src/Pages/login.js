import React, { Component, useState } from "react";
import "../Styles/login.css";
import { Navigate } from "react-router-dom";
import Banner from "../Components/banner";
import PageSideBar from "../Components/PageSideBar";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Navigate to="/" />;
    }
    return (
      <>
      <Banner pageHeding="Account Login" accountlink="/account" thispagelink="/login" linkName1="Account" linkName2="Login" />
      <div className="loginpage">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <PageSideBar />
            </div>
            <div className="col-md-9 right-side">
              <div className="row">
              <div className="col-md-6">
              <div className="comman-part">
                <h2>New Customer</h2>
                <p><strong>Register Account</strong></p>
                <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                <a href="/register" onClick={this.register} className="btn btn-continue">Continue</a></div>
              </div>
              <div className="col-md-6">
              <div className="comman-part">
                <h2>Returning Customer</h2>
                <p><strong>I am a returning customer</strong></p>
                <form onSubmit={this.login}>
                  <div className="form-group">
                  <label className="control-label" htmlFor="user_id">Username</label>
                  <input type="text" name="user_id" onChange={this.handleFormChange} placeholder="Username" id="user_id" className="form-control" />
                  </div>
                  <div className="form-group">
                  <label className="control-label" htmlFor="user_password">Password</label>
                  <input type="password" name="user_password" onChange={this.handleFormChange} placeholder="Password" id="user_password" className="form-control" />
                  <a href="">Forgotten Password</a>
                  </div>
                  <p>Username === "admin" && Password === "123"</p>
                  <input type="submit" value="Login" className="btn btn-continue" />
                </form>
                </div>
              </div>
            </div> 
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default Login;
