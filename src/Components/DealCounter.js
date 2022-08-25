import React from "react";
import Timer from "../Components/Timer";
export default function DealCounter(){
    return(
        <div className="special-part">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
              <div className="main-wapper">
                <div className="img-wapper">
                  <a href="">
                    <img src="/images/Cms-1.png" alt="post" />
                  </a>
                </div>
                <div className="description">
                  <div className="subtitle-icon">
                    <span className="icon-img">
                    <i className="fa fa-apple">
                    </i>
                    </span>
                    <span className="subtitle">MacBooks</span>
                  </div>
                  <div className="subtitle1">Starting At Only <b>$2,500</b></div>
                  <div className="title">
                    <span className="svg-icon">
                        <img src="/images/HSBC.png" alt="" />
                    </span>
                    <span className="subtitle2">
                    <b>10% Instant Discount*</b>
                    <br />
                    On ABC Credit card
                    </span>
                  </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
              <div className="main-wapper">
                <div className="heading">
                <span className="Box-heading">
                <span style={{backgroundColor: "#f7d929",padding: "0 6px"}}>Deal</span> Of
                <br />The Day</span>
                <h4><a href="#">Hurry Up!!</a></h4>
                </div>
                <div className="description">
                  <div className="subtitle-icon">
                    {<Timer />}
                  </div>
                  <div className="shop-now">
                  <a href="#" title="shop-button">
                  <button type="button" className="shop_button">Shop Now</button>
                  </a>
                  </div>
                  <span className="offer-tax">Get Deals. Every Day</span>
                </div>
              </div>
          </div>
          <div className="col-md-4">
          <div className="main-wapper">
            <div className="cms1_img">
              <a href="#" title="banner1">
                <img className="cms_image1" src="images/Cms-2.png" alt="camera" />
              </a>
            </div>
            <div className="description">
              <div className="subtitle-icon"><span className="icon-img"><i className="fab fa-xbox" aria-hidden="true"></i></span><span className="subtitle">Xbox</span></div>
              <div className="subtitle1">Up To Flat<b> 50% off</b></div>
              <div className="title">
                <span className="svg-icon">
                <img src="/images/HSBC.png" alt="" />
                </span>
                <span className="subtitle2">
                <b>10% Instant Discount*</b>
                <br />
                On ABC Credit card
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}