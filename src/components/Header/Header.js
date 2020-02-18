import React, { Component } from 'react'
import { Link } from 'gatsby'

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
  };
  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };
  render() {
    const isScrolling = !!this.state.scrollPositionY;
    return (
      <header
        className={`${this.state.isOpen ? "menu-opened" : ""} ${
          isScrolling ? "bgWhite" : "nav"
        }`}
      >
        <div className="container">
          <Top />
          <div className="burger-container" onClick={this.toggleMenu}>
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
            </div>
          </div>
          <Bottom />
        </div>
      </header>
    );
  }
}

export default Header