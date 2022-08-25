import React from "react";
import Banner from "../Components/banner";
import PageSideBar from "../Components/PageSideBar";
import "../Styles/checkout.css";
export default function Checkout(){
    return(
        <>
            <Banner pageHeding="Checkout" accountlink="/cartpage" thispagelink="/checkout" linkName1="Shopping Cart" linkName2="Checkout" />
            <div className="loginpage">
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <PageSideBar />
                    </div>
                    <div className="col-md-9 right-side">
                    <div className="row">
                        <div className="col-12">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href="">Step 1: Checkout Options</a></h4>
                                    </div>
                                    <div className="panel-collapse collapse" id="collapse-checkout-option">
                                    <div className="panel-body"></div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href="" className="accordion-toggle collapsed">Step 2: Billing Details <i className="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href=""className="accordion-toggle collapsed">Step 3: Delivery Details <i className="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#collapse-shipping-method" className="accordion-toggle collapsed">Step 4: Delivery Method <i className="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#collapse-payment-method" className="accordion-toggle collapsed">Step 5: Payment Method <i className="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                    <h4 className="panel-title"><a href="#collapse-checkout-confirm" className="accordion-toggle">Step 6: Confirm Order <i className="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}