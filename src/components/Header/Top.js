import React, { Component } from 'react'
import { Link } from 'gatsby'

import Navbar from "./Navbar";

import logo from "../../assets/images/logo-white.svg";
import logoDark from "../../assets/images/logo-dark.svg";

const TopNav = props => {
    return(
        <div className="top">
            <div className="city">
                Los Angeles County, CA
            </div>
            <div className="contact-info">
                <span><a href="tel:661-992-0517">661-992-0517</a></span>
                <span><a href="mailto:info@setmedicla.com">info@setmedicla.com</a></span>
            </div>
        </div>
    )
}
export default TopNav