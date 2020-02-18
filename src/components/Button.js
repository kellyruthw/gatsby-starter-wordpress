import React from "react"

import { graphql } from 'gatsby'
import rightArrow from "../assets/images/icon-rtarrow.svg";

const Button = ({title, link}) => {

  return(
    <a href={link} className="btn red">
        {title}
        <img src={rightArrow} />
    </a>
  )
}

export default Button