import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainFeature from "./components/mainfeature";
import Testimonials from "./components/testimonials";
import AboutUs from "./components/about/aboutUs";
import Footer from "./components/header_footer/footer";

import Navbar from "./components/header_footer/navbar";
import TechStack from "./components/techStack/index";
import { Element } from "react-scroll";

function App() {
  return (
    <Router>
      <div style={{}}>
        <Element>
          <Navbar />
        </Element>
        <Element name="Main">
          <MainFeature />
        </Element>
        <Element name="About">
          <AboutUs />
        </Element>
        <Element name="testimonial">
          <Testimonials />
        </Element>
        <Element name="Technology">
          <TechStack />
        </Element>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
