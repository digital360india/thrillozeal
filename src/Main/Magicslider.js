import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import './Magicslider.css';
const Magicslider = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        }
      };
   
  return (
      <div className="sliderwrapper">
    <Slider {...settings}>
        <div className="img-contain">
          <img className="img1" src="./Images/Rectangle 7.jpg"></img>
        </div>
        <div className="img-contain">
        <img className="img1" src="./Images/Rectangle 7.jpg"></img>
        </div>
        <div className="img-contain">
        <img className="img1" src="./Images/Rectangle 7.jpg"></img>
        </div>
       
        </Slider>
        </div>
  )

  
}

export default Magicslider