import React, { Component } from 'react'

import Navbar from "./Navbar";

import logoDark from "../../assets/images/logo-dark.svg";

class BottomNav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

      render() {
    
        return (
            <div className="bottom">
                <div className="logo">
                    <a href="/">
                        <img src={logoDark} alt="logo" className="logo-dark" />
                    </a>
                </div>
                <Navbar />
            </div>
        )
    }
}
export default BottomNav