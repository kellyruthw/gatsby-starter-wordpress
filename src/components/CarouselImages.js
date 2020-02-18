import React from "react";
import Slider from "react-slick";

import wipeout from "../assets/images/wipepout-scuba-rescue.jpg"
 
class CarouselImages extends React.Component {
  render() {
    var settings2 = {
      dots: false,
      centerMode: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 8000,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
      
    }

    return (
      <Slider {...settings2}>
        <div><img src={wipeout} /></div>
        <div><img src={wipeout} /></div>
        <div><img src={wipeout} /></div>
        <div><img src={wipeout} /></div>
      </Slider>
    );
  }
}

export default CarouselImages