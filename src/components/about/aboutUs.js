import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Reveal from "react-reveal/Reveal";

export default class AboutUs extends Component {
  state = {
    show: false
  };
  animateText = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 555,
        y: 55
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [55],
        timing: { duration: 1500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_text"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            <h2>About Us</h2>
            <br />
          </div>
        );
      }}
    </Animate>
  );
  animateNext = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 555,
        y: 55
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [55],
        timing: { delay: 400, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_text"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            <p>
              Luminocity had humble beginnings in 2007 with a basic set of
              Mackie speakers and a standard dj frontline. We mainly targeted
              events and parties at small venues, homes and bars.
            </p>
            <p>
              Ever since then, the equipment upgrades have been constant and we
              now offer the latest technologies for lights and sounds.
            </p>
          </div>
        );
      }}
    </Animate>
  );

  animateLast = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 555,
        y: 55
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [55],
        timing: { delay: 600, duration: 2000, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_text"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`
            }}
          >
            <p>
              Our regular clientele has also grown to include corporations,
              non-profit organizations and families who always trust us to
              handle their special events. We accommodate all kinds of requests
              for entertainment.
            </p>

            <p>
              We have also formed alliances and affiliations that help us
              support one another so no requirement or venue will be too big or
              too complex for us.
            </p>
            <br />
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <Reveal
        fraction={0.6}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div className="about_container">
          <div className="about_left">
            {this.animateText()}
            {this.animateNext()}
            {this.animateLast()}
          </div>
        </div>
      </Reveal>
    );
  }
}
