import React from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import Cards from "./BlogData";
export default function BlogSlider(){
    var settings = {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
      };
      return (
        <div className="blog-slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="headding-blog">
                            <h3>From The Blog</h3>
                            <p>Our recent blogs will give you the most up-to-date information</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 blog-slider-hover">
                    <Slider {...settings}>
                    {Cards.map((blogItem,index) => (
                        <div key={index} className="col-md-12">
                        <div className="blog-block">
                            <div className="blog-left">
                                <div className="blog-image">
                                    <img src={blogItem.image} alt={blogItem.title} />
                                    <div className="post-image-hover"></div>
                                    <p className="post_hover">
                                        <a className="icon zoom" title="Click to view Full Image " href="" data-lightbox="example-set"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                        <Link className="icon readmore_link" title="Click to view Read More " to={`/BlogDetail/${blogItem.id}`}><i className="fa fa-link"></i></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="blog-right">
                                <div className="date-time">{blogItem.dateTime}</div>
                                <h4><Link to={`/BlogDetail/${blogItem.id}`}>{blogItem.title}</Link> </h4>
                                <div className="blog-desc">{blogItem.content}</div>
                                <div className="read-more"> <Link to={`/BlogDetail/${blogItem.id}`}>Read More</Link> </div>
                                </div>
                        </div>
                        </div>
                    ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
      );
}
