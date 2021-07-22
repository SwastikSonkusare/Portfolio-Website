import React from "react";
import Card from "../Card/Card";

import "./MyWork.scss";

const MyWork = () => {
  return (
    <>
      <main id="projects" className="projects">
        <h1 className="home__heading">
          My <span className="home__heading--secondary">Work</span>
        </h1>
        <h2 className="home__sub-heading">Check out some of my work...</h2>

        <div className="projects__cards">
          <Card />
        </div>
      </main>
    </>
  );
};

export default MyWork;
