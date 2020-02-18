import React, { Component } from 'react'
import { Link } from 'gatsby'

import Navbar from "./Navbar";

import logo from "../../assets/images/logo-white.svg";
import logoDark from "../../assets/images/logo-dark.svg";

const BottomNav = props => {
    return(
        <div className="bottom">
            <div className="logo">
                <Link to="/">
                <img src={logo} alt="logo" className="logo-white" />
                <img src={logoDark} alt="logo" className="logo-dark" />
                </Link>
            </div>
            <Navbar />
        </div>
    )
}
export default BottomNav