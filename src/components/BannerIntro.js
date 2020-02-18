import React from "react"

import { graphql } from 'gatsby'
import rightArrow from "../assets/images/icon-rtarrow.svg";

const BannerIntro = ({image, headline, introtxt, alttxt}) => {

  return(
      <>
        <div className="banner">
            <img src={image} alt={alttxt} />
        </div>
        <div className="container">
            <div className="intro">
                <h1>{headline}</h1>
                <p className="introtxt">
                    {introtxt}
                </p>
            </div>
        </div>
    </>
  )
}

export default BannerIntro