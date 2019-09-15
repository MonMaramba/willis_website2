import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./sideDrawer.component";

export default class Navbar extends Component {
  state = {
    drawerOpen: false,
    navBarShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        navBarShow: true
      });
    } else {
      this.setState({
        navBarShow: false
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.navBarShow
            ? "rgb(53, 133, 199)"
            : "transparent",
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
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toggleDrawer(value)}
            ></SideDrawer>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
