import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MyWorkScreen from "./screens/MyWorkScreen";
import ContactScreen from "./screens/ContactScreen";

import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/my-work" component={MyWorkScreen} />
        <Route path="/reach-me" component={ContactScreen} />
      </Router>
    </>
  );
};

export default App;
