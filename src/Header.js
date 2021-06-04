//Bringing in React component
import React, { Component } from 'react';
import './Header.css';
//Created a class-based component
class Header extends Component {
  //Uses the render method to create props that will show in the DOM
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
