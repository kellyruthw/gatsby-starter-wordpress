import React from "react";
import Slider from "react-slick";
import { graphql } from 'gatsby'

import wipeout from "../assets/images/wipepout-scuba-rescue.jpg"
 
const CarouselImages = (props) => {
    
    const pageData = props.data.wordpressPage
    
    const settings2 = {
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
          {pageData.acf.carousel.map((image) => (
                <div>
                    <img src={image.source_url} />
                </div>
            ))}        
      </Slider>
    )
}

export default CarouselImages
