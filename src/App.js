import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/about" exact component={AboutScreen} />
    </Router>
  );
};

export default App;
