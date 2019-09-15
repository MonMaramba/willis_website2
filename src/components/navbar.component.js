import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export default class Navbar extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "rgb(53, 133, 199)",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_container">
            <div className="left">Luminocity</div>
            <div className="subtext">Mobile Light and Sound</div>
          </div>
          <div className="right">
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => console.log("open")}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
