import React from "react"

import { graphql } from 'gatsby'

const ServiceBox = ({icon, title, copy, link, demand}) => {

  return(
    <a href={link} className="service-box">
        {demand && (
        <div className="demand">
            {demand}
        </div>
        )}
        
        <img src={icon} />
        <h3>{title}</h3>
        <p>{copy}</p>
        <p className="red">Learn More</p>
    </a>
  )
}

export default ServiceBox