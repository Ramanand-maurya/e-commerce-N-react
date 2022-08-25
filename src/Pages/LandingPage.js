import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../Components/HomeSlider";
import "../Styles/LandingPage.css";
import Delivery from "../Components/delivery";
import LandingProduct from "../Components/landiinPageProduct";
import DealCounter from "../Components/DealCounter";
import BrandMarquee from "../Components/BrandMarquee";
import BlogSlider from "../Components/BlogSlider";
export default function LandingPage() {
  
  return (
    <>
    <HomeSlider />
    <Delivery />
    <LandingProduct />
    <div className="poster-img">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wapper-img">
              <a href="">
                <img src="/images/offer-poster.jpg" alt="poster" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LandingProduct />
    <DealCounter />

    {/* cmbanner-block */}
    <div className="cmbanner-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="cms_img">
            <a href="" className="banner">
            <img className="cms_image1" src="images/banner-block.jpg" alt="" />
            </a>
            <div className="description">
              <div className="title">Starting At Only $5,500</div>
              <div className="subtitle">Brand Laptop</div>
              <a href="" title="shop-button">
              <button type="button" className="shop_button">Shop Now</button>
              </a>
            </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="cms_img">
            <a href="" className="banner">
            <img className="cms2_image2" src="images/banner-block-1.jpg" alt="" />
            </a>
            <div className="description">
              <div className="title">Starting At Only $5,500</div>
              <div className="subtitle">casual shoes</div>
              <a href="" title="shop-button">
              <button type="button" className="shop_button">Shop Now</button>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BrandMarquee />
    {/* ShoppingGadgets */}
    <div className="ShoppingGadgets">
      <div className="ShoppingGadgets-block">
        <div className="container">
          <div className="row">
          <div className="col-md-6">
            <div className="main-Gadgets">
            <div className="cms_image">
              <a href="">
                <img className="cms_image1" src="images/banner-block-2.jpg" alt="" />
              </a>
            </div>
            <div className="description">
            <div className="title">Shopping Gadgets</div>
            <div className="desc">
            Contrary to popular belief, Lorem Ipsum is not simply dummy text. It roots in a piece of classical Latin literature45 BC, making it ov 2000 years old. dummy text
            </div>
            <a href="" title="read-button">
              <button type="button" className="cm_button">Read More</button>
            </a>
            </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className="main-Gadgets">
            <div className="cms_image">
              <a href="">
                <img className="cms_image1" src="images/banner-block-3.jpg" alt="" />
              </a>
            </div>
            <div className="description">
            <div className="title">Shopping Gadgets</div>
            <div className="desc">
            Contrary to popular belief, Lorem Ipsum is not simply dummy text. It roots in a piece of classical Latin literature45 BC, making it ov 2000 years old. dummy text
            </div>
            <a href="" title="read-button">
              <button type="button" className="cm_button">Read More</button>
            </a>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
      <BlogSlider />
      <div className="gutter" />
      <h4 className="LandingPage-heading">Explore Top Brands For Mens</h4>
      <div className="LandingPage-container">
        <div className="Poster-container poster-1">
          <div className="Poster-overlay">
            <Link to="/products/mens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/6fc32dea-a09a-44c0-84f9-48b4aad833211616739041356-1.jpg"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-2">
          <div className="Poster-overlay">
            <Link to="/products/mens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bae7bfe9-526f-44d8-9f51-11f44ff1a193/jordan-dri-fit-air-trousers-RsRvsv.png"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-3">
          <div className="Poster-overlay">
            <Link to="/products/mens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/w_373,c_limit/80500a49-c8e0-40bf-95d2-32330c70c484/kd14-basketball-shoe-8xhLgp.png"
            alt="poster"
          />
        </div>
      </div>
      <h4 className="LandingPage-heading">Trending Wears for Womens</h4>
      <div className="LandingPage-container">
        <div className="Poster-container poster-1">
          <div className="Poster-overlay">
            <Link to="/products/womens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7de2e69a-eaaa-4564-91f7-ac9c5ea09dbf/paris-saint-germain-pullover-hoodie-08pH6W.png"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-2">
          <div className="Poster-overlay">
            <Link to="/products/womens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/817b5057-efaa-446e-aa63-27faddeb6281/epic-luxe-run-division-mid-rise-running-leggings-19MTX9.png"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-3">
          <div className="Poster-overlay">
            <Link to="/products/womens">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abb94c61-4ae3-4b04-929f-a269043fb10b/court-vision-alta-shoe-8xrQqK.png"
            alt="poster"
          />
        </div>
      </div>
      <h4 className="LandingPage-heading">Summer Wears for Kids</h4>
      <div className="LandingPage-container">
        <div className="Poster-container poster-1">
          <div className="Poster-overlay">
            <Link to="/products/kids">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0114252-0ab0-4020-a7e9-bf9e1c1543a5/sportswear-tech-fleece-older-hoodie-34Fhn1.png"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-2">
          <div className="Poster-overlay">
            <Link to="/products/kids">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c44faa2d-03f0-44a4-a4f0-b25863e9c826/sportswear-heritage-older-hoodie-pQGfdx.png"
            alt="poster"
          />
        </div>
        <div className="Poster-container poster-3">
          <div className="Poster-overlay">
            <Link to="/products/kids">
              <button className="Overlay-button">Shop Now</button>
            </Link>
          </div>
          <img
            className="Poster"
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/drqjvon1hazlb1s8bqex/air-more-uptempo-older-shoe-kJP9w3.png"
            alt="poster"
          />
        </div>
      </div>
    </>
  );
}


