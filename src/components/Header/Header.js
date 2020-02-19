import React, { Component } from 'react'

import Top from "./Top";
import Bottom from "./Bottom";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
      isOpen: false
    };
  }
  componentDidMount() {
    return window.addEventListener("scroll", debounce(this.handleScroll, 16));
    
  }
  componentWillUnmount() {
    return window.removeEventListener(
      "scroll",
      debounce(this.handleScroll, 16)
    );
  }
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
    if(this.state.isOpen){
      document.body.style.overflow = 'hidden';
    } 
  };
  
  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  render() {

    return (
      <header
        className={`${this.state.isOpen ? "menu-opened" : ""} ${
          this.state.scrollPositionY >= 147 ? "sticky slide-down" : "nav"
        }`}
      >
        <div className="container">
          <Top />
          <Bottom />
          <div id="menu-icon" className={`${this.state.isOpen ? "open" : ""}`} onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header