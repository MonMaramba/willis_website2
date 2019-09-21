import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

export default class AboutUs extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1500, ease: easePolyOut }
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(100px,120px)rotateY(${rotate}deg)`
            }}
          >
            12
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="about_container">
        <div className="about_left">
          <h2>About Us</h2>
          <br />
          <br />

          <p>
            Luminocity had humble beginnings in 2007 with a basic set-up of
            Mackie speakers and standard dj frontline equipment. We mainly
            targeted events and parties at small venues, homes and bars.
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
          </p>
        </div>
        <div className="about_right">
          <h6>Celebrating</h6>
          {this.animateNumber()}
          <h5>Years!</h5>
        </div>
      </div>
    );
  }
}
