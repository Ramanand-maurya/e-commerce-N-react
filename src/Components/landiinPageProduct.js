import React from "react";
import Slider from "react-slick";
import { FilterContext } from "../Context/FilterContext";
import { useContext } from "react";
import ProductCard from "../Components/ProductCard";
export default function LandingProduct(){
    const { filteredProducts } = useContext(FilterContext);
    var settings = {
        arrows: true,
        dots: false,
        slidesToShow: 5,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
      };
      return (
        <div className="product-slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headding-product">
                            <h3>Trending Items</h3>
                            <p>Want to stay in trend? Take a look at these super trendy products.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 product-slider-hover">
                    <Slider {...settings}>
                    {filteredProducts.map((product,index) => (
                        <div key={index} className="col-md-12">
                        <ProductCard id={product.id} product={product} />
                        </div>
                    ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
      );
}