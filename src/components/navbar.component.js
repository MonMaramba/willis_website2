import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <div className="left">
            Luminocity
            <span className="subtext">Mobile Light and Sound</span>
          </div>
        </div>
        <div className="right">Blah Blah there</div>
      </nav>
    );
  }
}
