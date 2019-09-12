import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component="{Home}" />
      <Route path="/" exact component="{Comments}" />
    </Router>
  );
}

export default App;
