import React from "react";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";

import "./MyWork.scss";

const MyWork = () => {
  return (
    <main id="projects">
      <Technologies />
      <Projects />
    </main>
  );
};

export default MyWork;
