import React from "react";
import Banner from "../Components/banner";
import PageSideBar from "../Components/PageSideBar";
// import Captcha from "../Components/Captcha";
// import Captcha from 'demos-react-captcha';
export default function Register() {
  return (
    <>
      <Banner
        pageHeding="Account Register"
        accountlink="/account"
        thispagelink="/register"
        linkName1="Account"
        linkName2="Register"
      />
      <div className="loginpage">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <PageSideBar />
            </div>
            <div className="col-md-9 right-side">
              <div className="row">
                <div className="col-12">
                  <div className="register-box">
                    <form className="form-horizontal">
                      <fieldset id="account">
                        <legend>Your Personal Details</legend>
                        <div
                          className="form-group required"
                          style={{ display: "none" }}
                        >
                          <label className="col-sm-2 control-label">
                            Customer Group
                          </label>
                          <div className="col-sm-10">
                            {" "}
                            <div className="radio">
                              <label>
                                <input
                                  type="radio"
                                  name="customer_group_id"
                                  defaultChecked
                                />
                                Default
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-firstname"
                          >
                            First Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="firstname"
                              placeholder="First Name"
                              id="input-firstname"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-lastname"
                          >
                            Last Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Last Name"
                              id="input-lastname"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-email"
                          >
                            E-Mail
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              name="email"
                              placeholder="E-Mail"
                              id="input-email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-telephone"
                          >
                            Telephone
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="tel"
                              name="telephone"
                              placeholder="Telephone"
                              id="input-telephone"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Your Password</legend>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-password"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              id="input-password"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            htmlFor="input-confirm"
                          >
                            Password Confirm
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="password"
                              name="confirm"
                              placeholder="Password Confirm"
                              id="input-confirm"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Newsletter</legend>
                        <div className="form-group required">
                          <label className="col-sm-2 control-label">
                            Subscribe
                          </label>
                          <div className="col-sm-10">
                            {" "}
                            <label className="radio-inline">
                              <input type="radio" name="newsletter" value="1" />
                              Yes
                            </label>
                            <label className="radio-inline">
                              <input
                                type="radio"
                                name="newsletter"
                                value="0"
                                defaultChecked
                              />
                              No
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend>Captcha</legend>
                        <div className="form-group required">
                          <label
                            className="col-sm-3 control-label"
                            htmlFor="input-captcha"
                          >
                            Enter the code in the box below
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="captcha"
                              id="input-captcha"
                              className="form-control"
                            />
                          </div>
                          {/* <Captcha /> */}
                        </div>
                      </fieldset>
                      <div className="buttons col-md-11">
                        <div className="pull-right">
                          I have read and agree to the{" "}
                          <a href="" className="agree">
                            <b>Privacy Policy</b>
                          </a>
                          <input type="checkbox" name="agree" value="1" />
                          &nbsp;
                          <input
                            type="submit"
                            value="Continue"
                            className="btn btn-continue"
                          />
                        </div>
                      </div>
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
