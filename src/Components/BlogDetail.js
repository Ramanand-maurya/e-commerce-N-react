import React from "react";
import Banner from "./banner";
import { Link,useParams } from "react-router-dom";
import Cards from "./BlogData";
export default function BlogDetail(){
    const { blogId } = useParams();
    return(
        <>
        {
            Cards.filter(val => val.id == blogId).map((val,i) =>{
                return(
                    <>
                    <Banner pageHeding={val.title} accountlink="/" thispagelink="/" linkName1="All Blog" linkName2={val.title} />
                    <div className="loginpage blog-detail-page">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                            <aside>
                                <div className="side-menus">
                                    <div className="heading">
                                    <h3>INFORMATION</h3>
                                    </div>
                                    <div className="menu-list">
                                    <a href="">About Us</a>
                                    <a href="">Delivery Information</a>
                                    <a href="">Privacy Policy</a>
                                    <a href="">Terms & Conditions</a>
                                    <a href="">Contact Us</a>
                                    <a href="">Site Map</a>
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
                            </div>
                            <div className="col-md-9 blog-right-side">
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-detail">
                                        <div className="blog-image">
                                            <img src={val.image} alt={val.title} />
                                        </div>
                                        <div className="blog-title">
                                            <h5>{val.title}</h5>
                                        </div>
                                        <div className="blog-content-p">
                                            <p>{val.content}
                                            </p>
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
            })
        }
        </>
    )
}