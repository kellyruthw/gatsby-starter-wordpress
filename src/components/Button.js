import React from "react"

import { graphql } from 'gatsby'
import rightArrow from "../assets/images/icon-rtarrow.svg";

const Button = ({title, link, animation, delay}) => {

  return(
    <a href={link} className={`${animation} btn animated red ${delay}`} >
        {title}
        <img src={rightArrow} alt="Icon of Right Arrow"/>
    </a>
  )
}

export default Button