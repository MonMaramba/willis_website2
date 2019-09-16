import React, { Component } from "react";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      comment: "",
      timestamp: new Date()
    };
  }

  render() {
    return <div>Testimonial</div>;
  }
}
