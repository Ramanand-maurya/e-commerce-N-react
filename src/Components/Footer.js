import "../Styles/Footer.css";
import React from "react";
export default function Footer() {
  return (
    <div className="footer">
      <div className="Newsletter">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="Newsletter-f">
              <div className="txt-news">Subscribe To Our Newsletter</div>
              <div className="sub-title">
                Get all the latest information on Events, Sales and Offers.
              </div>
              <div className="email-icon">
                <img src="/images/email.svg" alt="email-icon" />
              </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="newsletter">
                <form method="post">
                  <div className="form-group">
                    <div className="input-news">
                      <input
                        type="email"
                        name="txtemail"
                        id="txtemail"
                        placeholder="Your email address"
                        className="form-control input-lg"
                      />
                      <button
                        type="submit"
                        className="btn btn-default btn-lg"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-menu">
              <h4>INFORMATION</h4>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Delivery Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Search</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
                <li>
                  <a href="">Newsletter</a>
                </li>
                <li>
                  <a href="">Specials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-menu">
              <h4>CUSTOMER SERVICE</h4>
              <ul>
                <li>
                  <a href="">Specials</a>
                </li>
                <li>
                  <a href="">Return</a>
                </li>
                <li>
                  <a href="">Site Map</a>
                </li>
                <li>
                  <a href="">Brands</a>
                </li>
                <li>
                  <a href="">Gift Certificates</a>
                </li>
                <li>
                  <a href="">Downloads</a>
                </li>
                <li>
                  <a href="">Transaction</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-menu">
              <h4>MY ACCOUNT</h4>
              <ul>
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Order History</a>
                </li>
                <li>
                  <a href="">Wish List</a>
                </li>
                <li>
                  <a href="">Compare</a>
                </li>
                <li>
                  <a href="">Checkout</a>
                </li>
                <li>
                  <a href="">Cart</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-menu">
              <div className="address-footer">
                <div className="footer-logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <p>60, 29th Street, San Francisco, CA 94110, United States of America</p>
                <p>demo@example.com</p>
                <h6>(+1) 1234 4567 890</h6>
                <div className="follow">
                  <h5>FOLLOW US</h5>
                </div>
                <div className="social-footer">
                  <ul>
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                    <li><a href=""><i className="fa fa-instagram"></i></a></li>
                    <li><a href=""><i className="fa fa-youtube"></i></a></li>
                    <li><a href=""><i className="fa fa-pinterest-p"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-hr">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <p className="powered">Powered By <a href="">OpenCart</a> Your Store © 2022</p>
          </div>
          <div className="col-md-6">
          <div className="content_footer_bottom"> 
          <div className="payment-block">
            <ul>
              <li>
              <img alt="visa" src="/images/visa.png" />
              <img alt="discover" src="/images/discover.png" />
              <img alt="maestro" src="/images/maestro.png" />
              <img alt="master" src="/images/master.png" />
              <img alt="paypal" src="/images/paypal.png" />
              <img alt="mastercard" src="/images/mastercard.png" />
              </li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
