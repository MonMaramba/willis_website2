import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainFeature from "./components/mainfeature";
import Testimonials from "./components/testimonials";
import AboutUs from "./components/about/aboutUs";

import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <div style={{}}>
        <Navbar />
        <MainFeature />
        <AboutUs />
        <Testimonials />
      </div>
    </Router>
  );
}

export default App;
