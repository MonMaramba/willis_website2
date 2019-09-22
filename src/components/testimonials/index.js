import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Reveal from "react-reveal/Reveal";
import axios from "axios";

export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      email: "",
      comment: "",
      timestamp: new Date(),
      show: false
    };
  }

  onChangeUser = e => {
    this.setState({
      username: e.target.value
    });
  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      comment: this.state.comment
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));
  };

  animateForm = () => (
    <Animate
      show={true}
      start={{
        opacity: 0
      }}
      enter={{
        opacity: [1],
        timing: { delay: 500, duration: 600, ease: easePolyOut }
      }}
    >
      {({ opacity }) => {
        return (
          <div className="testimonial_add">
            <h2>Add a testimonial</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form_group">
                <label>Name</label>
                <input
                  type="text"
                  required
                  className="form_control"
                  value={this.state.username}
                  onChange={this.onChangeUser}
                />
              </div>
              <div className="form_group">
                <label>Email:</label>
                <input
                  type="text"
                  required
                  className="form_control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form_group">
                <label>What did you think of our service?</label>
                <textarea
                  type="text"
                  required
                  className="comment"
                  value={this.state.comment}
                  onChange={this.onChangeComment}
                />
              </div>
              <div className="form_group">
                <button
                  type="submit"
                  className="btn"
                  value={this.state.comment}
                  onChange={this.onChangeComment}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div className="testimonial_add">{this.animateForm()}</div>
      </Reveal>
    );
  }
}
