import React from "react";
import Slider from "react-slick";
import slide1 from "../../Resources/Images/luminosity1.jpg";
import slide2 from "../../Resources/Images/luminosity2.jpg";
import slide3 from "../../Resources/Images/Luminosity3.jpg";
import slide4 from "../../Resources/Images/luminosity4.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide4})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
