import React from "react"

import divider from "../assets/images/icon-red-star.svg";

const Divider = () => {

  return(
    <div className="container">
        <div className="divider">
            <img src={divider} alt="Divider with Logo"/>
        </div>
    </div>
  )
}

export default Divider