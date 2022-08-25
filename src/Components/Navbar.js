import React from "react";
import "../Styles/Navbar.css";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { DataContext } from "../Context/DataContext";
import {CartContext} from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import "../Styles/Banner.css";
import {slider2} from "./SliderData";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { setCurrentCategory } = useContext(DataContext);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const handleClose = () => {
    setOpen(false);
  };
  const changeCategory = (category) => {
    setCurrentCategory(category);
    setOpen(false);
    setActive(false);
  };
  const [isAdd, setAdd] =useState(false);
  const addClassdropdown = () => {
    isAdd === true ? setAdd(false) : setAdd(true);
  };
  const [isActive, setActive] =useState(false);
  const addActiveClass = () => {
    isActive === true ? setActive(false) : setActive(true);
  };

  const [islogout, setLogout] =useState(false);
  const signOut = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };

  const cartStyle = {};
  if(cart.length > 9){
    cartStyle.height = "20px";
    cartStyle.width = "20px";
    cartStyle.lineHeight ="21px";
  }
  const wishlistStyle = {};
  if(wishlist.length > 9){
    wishlistStyle.height = "20px";
    wishlistStyle.width = "20px";
    wishlistStyle.lineHeight ="21px";
  }
  return (
    <>
    <header>
      <div className="header-manu">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo-box">
            <div>
              <NavLink className="Navbar-logo" to="/" onClick={handleClose}>
                <img src="/images/logo.png" alt="logo" />
              </NavLink>
            </div>
            <div className="sidemenu">
              <div className="toggle-icon" onClick={addActiveClass}>
                <img src="/images/menu-toggle.svg" alt="toggle" />
              </div>
              <div className={`box-content ${isActive === true ? "active" : ""}`}>
                <div className="category-box-heading">Shop By Category<span onClick={addActiveClass}></span></div>
                  <ul className="box-category-menu">
                    <li>
                    <NavLink onClick={() => changeCategory("mens")} to="products/mens">Mens</NavLink>
                    </li>
                    <li>
                    <NavLink onClick={() => changeCategory("womens")} to="products/womens">Womens</NavLink>
                    </li>
                    <li>
                    <NavLink onClick={() => changeCategory("kids")} to="products/kids">Kids</NavLink>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                              </li>
                    <li>
                        <a href="/productShow">Appliances</a>
                              </li>
                    <li>
                        <a href="/">AutoParts</a>
                              </li>
                    <li>
                        <a href="/">Kitchen</a>
                              </li>
                    <li>
                        <a href="/">Books</a>
                              </li>
                    <li>
                        <a href="/">Baby Products</a>
                              </li>
                    <li>
                        <a href="/">Furniture</a>
                              </li>
                    <li>
                        <a href="/">Home Decore</a>
                              </li>
                    <li>
                        <a href="/">Tool</a>
                              </li>
                    <li>
                        <a href="/">Bag Pack</a>
                              </li>
                    <li>
                        <a href="/">Sports and fitness</a>
                              </li>
                    <li className="last">
                        <a href="/">Beauty Products</a>
                              </li>
                  </ul>	
                </div>
            </div>
            </div>
          </div>
          <div className="col-md-5">
            <div id="searchbox" className="input-group searchtoggle">
		          <div className={`search_box ${isAdd === true ? "active" : ""}`} onClick={addClassdropdown}>
                <select name="category_id" className="form-control-select">
                  <option value="0">All Categories</option>
                  <option value="20">Grocery</option>
                  <option value="68">&nbsp;&nbsp;&nbsp;Bakery and Bread</option>
                  <option value="69">&nbsp;&nbsp;&nbsp;Frozen Foods</option>
                  <option value="70">&nbsp;&nbsp;&nbsp;Dairy Products</option>
                  <option value="71">&nbsp;&nbsp;&nbsp;Snacks and Crackers</option>
                  <option value="49">Kids</option>
                  <option value="63">&nbsp;&nbsp;&nbsp;Kids Toy</option>
                  <option value="64">&nbsp;&nbsp;&nbsp;Kids Fashion</option>
                  <option value="18">Fashion</option>
                  <option value="46">&nbsp;&nbsp;&nbsp;Accessories</option>
                  <option value="45">&nbsp;&nbsp;&nbsp;Eyeliner</option>
                  <option value="25">Gadgets</option>
                  <option value="29">&nbsp;&nbsp;&nbsp;Mobile Phones</option>
                  <option value="28">&nbsp;&nbsp;&nbsp;Monitors</option>
                  <option value="30">&nbsp;&nbsp;&nbsp;Printers</option>
                  <option value="31">&nbsp;&nbsp;&nbsp;Scanners</option>
                  <option value="32">&nbsp;&nbsp;&nbsp;Web Cameras</option>
                  <option value="57">Electronics</option>
                  <option value="17">Appliances</option>
                  <option value="24">AutoParts</option>
                  <option value="59">Kitchen</option>
                  <option value="66">Books</option>
                  <option value="62">Baby Products</option>
                  <option value="33">Furniture</option>
                  <option value="67">Home Decore</option>
                  <option value="34">Tool</option>
                  <option value="60">Bag Pack</option>
                  <option value="61">Sports and fitness</option>
                  <option value="65">Beauty Products</option>
                </select>
              </div>	
            <input type="text" name="search" placeholder="Search Products... " className="form-control input-lg" />
              <span className="input-group-btn">
                <button type="button" className="btn btn-default btn-lg">
                  <img src="/images/search_black.svg" alt="search-btn" />
                </button>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="header-right">
              <div className="myaccount">
                <a ><span>My Account<i className="fas fa-user"></i></span></a>
                <ul className="myaccount-menu">
                <li><NavLink to='/account' ><span>Profile</span></NavLink></li>
                  {localStorage.getItem("token") ?
                    <li><NavLink to='/login' onClick={signOut}><span>Sign Out</span></NavLink></li>
                    : 
                  <span>
                    <li><NavLink to="/login"><span>Login</span></NavLink></li>
                    <li><NavLink to="/register"><span>Sign Up</span></NavLink></li>
                  </span>
                      }
                  <li><NavLink to="/checkout"><span>Checkout</span></NavLink></li>
                  <li><NavLink to="/cart"><span>Cart</span></NavLink></li>
                  <li><NavLink to="/wishlist"><span>Wish List</span></NavLink></li>
                </ul>
              </div>
              <div className="account">
              <div className="header_wishlist">
                <NavLink id="wishlist-total" onClick={handleClose} className="Navbar-links" to="/wishlist">
                  <span style={wishlistStyle}>{wishlist.length}</span>
                  <img src="/images/Wishlist.svg" alt="Wishlist" />
                </NavLink>
              </div>
               <div className="header_cart">
                <div id="cart" className="btn-group btn-block">
                  <NavLink onClick={handleClose} to="/cart" className="btn-inverse btn-block">
                    <div className="cart_detail">
                    <div className="cart_image">
                      <img src="/images/bag.svg" alt="cart" />
                      </div>
                        <span id="cart-total"><span className="item-count" style={cartStyle} >{cart.length}</span>
                        </span>
                    </div>
                  </NavLink>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
    <ManuSlider />
    </>
  );

  function ManuSlider(){
    var settings = {
      arrows: false,
      dots: false,
      slidesToShow: 10,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            {slider2.map((val, ind) => {
              return (
                <div key={ind} className="menu-slider">
                  <a href="/">
                    <img
                      src={val.bannerImg}
                      alt={val.bannerName}
                      className="img-responsive"
                    />
                    <span>{val.bannerName}</span>
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
}
