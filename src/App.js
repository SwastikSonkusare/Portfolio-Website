import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MyWorkScreen from "./screens/MyWorkScreen";
import ContactScreen from "./screens/ContactScreen";

import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/work" element={<MyWorkScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </>
  );
};

export default App;
