import React from "react";
const Banner = (props) => {
  return (
    <div className="main-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="banner-box">
                        <h2>{props.pageHeding}</h2>
                        <ul className="breadcrumb">
                            <li><a href="/"><i className="fa fa-home"></i></a></li>
                            <li><a href={props.accountlink}><i className="fa fa-angle-double-right"></i> {props.linkName1}</a></li>
                            <li><a href={props.thispagelink}><i className="fa fa-angle-double-right"></i> {props.linkName2}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Banner;