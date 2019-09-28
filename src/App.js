import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainFeature from "./components/mainfeature";
import Testimonials from "./components/testimonials";
import AboutUs from "./components/about/aboutUs";

import Navbar from "./components/header_footer/navbar.component.js";
import TechStack from "./components/techStack/index";

function App() {
  return (
    <Router>
      <div style={{}}>
        <Navbar />
        <MainFeature />
        <AboutUs />
        <Testimonials />
        <TechStack />
      </div>
    </Router>
  );
}

export default App;
