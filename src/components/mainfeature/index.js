import React, { Component } from "react";
import Carrousel from "./Carrousel";
import axios from "axios";
import Fade from "react-reveal/Fade";

export default class MainFeature extends Component {
  state = {
    users: [],
    textToShow: [],
    currentText: `"Super fun!" - Super Freak`
  };

  newRandomNumber() {
    return Math.floor(Math.random() * this.state.textToShow.length);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
        let text = this.state.users.map(
          entry => `"${entry.comment}" - ${entry.username}`
        );
        this.setState({
          textToShow: text
        });
        console.log(this.state.textToShow);

        setInterval(() => {
          let randomizer = Math.floor(
            Math.random() * this.state.textToShow.length
          );

          this.setState({
            currentText: this.state.textToShow[randomizer]
          });
        }, 7000);
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
          <div className="wrapper">{this.state.currentText}</div>
        </div>
      </div>
    );
  }
}
