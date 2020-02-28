import React from "react";
import Slider from "react-slick";

import logoApple from "../assets/images/logo-apple.png"
import logoRupaul from "../assets/images/logo-rupaul.svg"
import logoViacom from "../assets/images/logo-viacom.svg"
import logoNike from "../assets/images/logo-nike.png"
import logoShameless from "../assets/images/logo-shameless.png"
import logoDisney from "../assets/images/logo-disney.svg"
import logoMcdonalds from "../assets/images/logo-mcdonalds.svg"
import logoWarnerBrothers from "../assets/images/logo-warnerbrothers.svg"
 
class Carousel extends React.Component {
  render() {
  
    const settings = {
      dots: false,
      centerMode: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows:false
          }
        },
      ]
    }

    return (
      <Slider {...settings}>
        <div><img src={logoApple} alt="Apple Logo" /></div>
        <div><img src={logoRupaul} alt="Rupaul's Drag Race Logo" /></div>
        <div><img src={logoViacom} alt="Viacom Logo" /></div>
        <div><img src={logoNike} alt="Nike Logo" /></div>
        <div><img src={logoShameless} alt="Shameless Logo" /></div>
        <div><img src={logoDisney} alt="Disney Logo" /></div>
        <div><img src={logoMcdonalds} alt="McDonalds Logo" /></div>
        <div><img src={logoWarnerBrothers} alt="Warner Brothers Logo" /></div>
      </Slider>
    );
  }
}

export default Carousel