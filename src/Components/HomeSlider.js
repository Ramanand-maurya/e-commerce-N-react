import React from "react";
import Slider from "react-slick";
import "../Styles/Banner.css";
import slider1 from "./SliderData";

export default function HomeSlider() {
  var settings = {
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="main-slider">
      <div className="Banner-container">
        <div className="Banner">
          <Slider {...settings}>
            {slider1.map((val, ind) => {
              return (
                <div key={ind}>
                  <a href="">
                    <img
                      src={val.bannerImg}
                      alt={val.bannerName}
                      className="img-responsive"
                    />
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
