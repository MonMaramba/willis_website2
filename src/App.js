import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainFeature from "./components/mainfeature";

import Navbar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <div style={{}}>
        <Navbar />
        <MainFeature />
        <br />
        {/* <Route path="/" exact component="{Home}" /> */}
        {/* <Route path="/" exact component="{Comments}" /> */}
      </div>
    </Router>
  );
}

export default App;
