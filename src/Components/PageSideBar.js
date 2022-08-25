import React from "react";
export default function PageSideBar(){
    return(
        <aside>
            <div className="side-menus">
            <div className="heading">
                <h3>ACCOUNT</h3>
            </div>
            <div className="menu-list">
            {localStorage.getItem("token") ? ""
            : <span>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="">Forgotten Password</a>
            </span>
            }
                <a href="">My Account</a>
                <a href="">Address Book</a>
                <a href="">Wish List</a>
                <a href="">Order History</a>
                <a href="">Downloads</a>
                <a href="">Recurring Payments</a>
                <a href="">Reward Points</a>
                <a href="">Returns</a>
                <a href="">Transactions</a>
                <a href="">Newsletter</a>
            </div>
            </div>
            <div className="single-banner">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                <img src="/images/left-banner.jpg" alt="Left Banner" className="img-responsive" />
                </div>
            </div>
            </div>
        </aside>
    )
}