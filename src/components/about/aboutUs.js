import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export default class AboutUs extends Component {
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
        timing: { delay: 400, duration: 1500, ease: easePolyOut }
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

            <br />
            <br />
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
        timing: { delay: 600, duration: 1500, ease: easePolyOut }
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
              too complex.
            </p>
            <br />
            <br />
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="about_container">
        <div className="about_left">
          {this.animateText()}
          {this.animateNext()}
          {this.animateLast()}
          {/* <h2>About Us</h2>
          <br />
          <br />

          <p>
            Luminocity had humble beginnings in 2007 with a basic set of Mackie
            speakers and a standard dj frontline. We mainly targeted events and
            parties at small venues, homes and bars.
          </p>
          <p>
            Ever since then, the equipment upgrades have been constant and we
            now offer the latest technologies for lights and sounds.
          </p>
          <p>
            Our regular clientele has also grown to include corporations,
            non-profit organizations and families who always trust us to handle
            their special events. We accommodate all kinds of requests for
            entertainment.
          </p>

          <p>
            We have also formed alliances and affiliations that help us support
            one another so no requirement or venue will be too big or too
            complex.
          </p> */}
        </div>
        {/* <div className="about_right">
          <h6>Celebrating</h6>
          {this.animateNumber()}
          <h5>Years!</h5>
        </div> */}
      </div>
    );
  }
}
