import React from "react";
import Carrousel from "./Carrousel";

const MainFeature = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="testimonial">
        <div className="wrapper">
          "Thanks for making our class reunion a success!" - Linguine
        </div>
      </div>
    </div>
  );
};

export default MainFeature;
