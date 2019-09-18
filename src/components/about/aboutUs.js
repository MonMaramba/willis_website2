import React from "react";

export default function aboutUs() {
  return (
    <div className="about_container">
      <div className="about_left">
        <img
          src={require("../../Resources/Images/20190812_183156-removebg.png")}
        />
      </div>
      <div className="about_right">
        <h2>About Us</h2>
        <p>
          Luminocity had humble beginnings in 2007 with a basic set-up of Mackie
          speakers and a standard dj frontline equipment mainly targeting events
          and parties at small venues, homes and bars.
        </p>
        <p>
          Ever since then, the equipment upgrades have been constant and we now
          offer the latest technologies for lights and sounds.
        </p>
        <p>
          Our regular clientele has also grown to include corporations,
          non-profit organizations and families who always trust us to handle
          their special events. We accommodate all kinds of requests for
          entertainment
        </p>
        <p>
          We have also formed alliances and affiliations that help us support
          one another so no requirement or venue will be too big or too complex.
        </p>
      </div>
    </div>
  );
}
