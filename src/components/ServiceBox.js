import React from "react"

import { graphql } from 'gatsby'

const ServiceBox = ({icon, title, copy, link, demand, alt_text}) => {

  return(
    <a href={link} className="service-box hvr-bob">
        {demand && (
        <div className="demand">
            {demand}
        </div>
        )}
        
        <img src={icon} alt={alt_text} />
        <h3>{title}</h3>
        <p>{copy}</p>
        <p className="red hover hover-1">Learn More</p>
    </a>
  )
}

export default ServiceBox