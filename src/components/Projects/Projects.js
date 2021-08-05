import React, { useState } from "react";

import "./Projects.scss";

import Card from "../Card/Card";
import { projects } from "../../assets/data";

const Projects = () => {
  const tabTitle = ["Dynamic Web Page", "Static Web Page"];
  const [toggle, setToggle] = useState("Dynamic Web Page");
  return (
    <div className="projects">
      <h1 className="home__heading">
        Check out{" "}
        <span className="home__heading--secondary">some of my work</span>
      </h1>

      <div className="projects__cards">
        <div className="tab">
          {tabTitle.map((title) => (
            <button
              className={toggle === title ? "tab__title active" : "tab__title"}
              onClick={() => setToggle(title)}
              key={title}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="projects__container">
          {projects.map((project) => (
            <Card project={project} toggle={toggle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
