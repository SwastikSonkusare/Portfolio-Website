import React, { useState } from "react";

import "./Projects.scss";

import Card from "../Card/Card";
import { projects } from "../../assets/data";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="home__heading">
        Check out{" "}
        <span className="home__heading--secondary">some of my work</span>
      </h1>

      <div className="projects__cards">
        <div className="projects__container">
          {projects.map((project) => (
            <Card project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
