import React from "react";
import Slider from "react-slick";
var Cards = [
    {"image":"/images/brand-1.png", 
  "title":"Burgundy Flemming",},
 {"image":"/images/brand-2.png", 
  "title":"Nigel Nigel", },
 {"image":"/images/brand-3.png", 
  "title":"Caspian Bellevedere",},
  {"image":"/images/brand-4.png", 
  "title":"Burgundy Flemming",},
 {"image":"/images/brand-5.png", 
  "title":"Nigel Nigel", },
 {"image":"/images/brand-6.png", 
  "title":"Caspian Bellevedere",},
  {"image":"/images/brand-1.png", 
  "title":"Burgundy Flemming", },
 {"image":"/images/brand-2.png", 
  "title":"Nigel Nigel", },
 {"image":"/images/brand-3.png", 
  "title":"Caspian Bellevedere",},
  {"image":"/images/brand-4.png", 
  "title":"Burgundy Flemming",},
 {"image":"/images/brand-5.png", 
  "title":"Nigel Nigel", },
];

export default function Marquee(){
    var settings = {
        arrows: false,
        dots: false,
        slidesToShow: 7,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
      };
      return (
        <div className="brand-slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Slider {...settings}>
                    {Cards.map((brandItem,index) => (
                        <div key={index} className="col-md-12">
                        <img src={brandItem.image} alt={brandItem.title} />
                        </div>
                    ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
      );
}
