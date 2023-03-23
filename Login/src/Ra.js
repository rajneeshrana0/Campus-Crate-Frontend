import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/index";
import Test from "./Components/test";

class Ra extends Component {
	render() {
		return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    );
	}
}

export default Ra;