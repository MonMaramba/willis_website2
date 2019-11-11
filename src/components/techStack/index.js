import React, { Component } from "react";

import Image1 from "../../Resources/Images/rcf_logo.png";
import Image2 from "../../Resources/Images/pioneer_logo.png";
import Image3 from "../../Resources/Images/serato_logo.png";
import Image4 from "../../Resources/Images/shure_logo.png";
import Image5 from "../../Resources/Images/mackie_logo.png";

export default class TechStack extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div className="tech_stack">
        <h2>Our Technology Stack:</h2>
        <div className="logo_container">
          <img src={Image4} alt="shure logo" />
          <img src={Image2} alt="pioneer logo" />
          <img src={Image1} alt="rcf logo" />
          <img src={Image3} alt="serato logo" />
          <img src={Image5} alt="mackie logo" />
        </div>
      </div>
    );
  }
}
