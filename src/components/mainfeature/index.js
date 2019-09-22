import React, { Component } from "react";
import Carrousel from "./Carrousel";
import axios from "axios";

export default class MainFeature extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
        console.log(this.state.users);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Carrousel />
        <div className="testimonial">
          <div className="wrapper">Eat my shorts - Bart Simpson</div>
        </div>
      </div>
    );
  }
}
