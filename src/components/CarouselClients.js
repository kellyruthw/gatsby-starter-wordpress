import React from "react";
import Slider from "react-slick";

import logoApple from "../assets/images/logo-apple.png"
import logoRupaul from "../assets/images/logo-rupaul.svg"
import logoViacom from "../assets/images/logo-viacom.svg"
import logoNike from "../assets/images/logo-nike.png"
import logoShameless from "../assets/images/logo-shameless.png"
 
class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoPlay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    }

    return (
      <Slider {...settings}>
        <div><img src={logoApple} /></div>
        <div><img src={logoRupaul} /></div>
        <div><img src={logoViacom} /></div>
        <div><img src={logoNike} /></div>
        <div><img src={logoShameless} /></div>
      </Slider>
    );
  }
}

export default Carousel