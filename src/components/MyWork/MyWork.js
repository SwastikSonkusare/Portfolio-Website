import React from "react";
import Card from "../Card/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { techLogos, projects } from "../../assets/data";

import "./MyWork.scss";

const MyWork = () => {
  const tabTitle = ["Dynamic Web Page", "Static Web Page"];

  return (
    <>
      <main id="projects">
        <div className="technology">
          <h1 className="home__heading">
            Technologies{" "}
            <span className="home__heading--secondary">that I know</span>
          </h1>

          <div className="technology__container">
            {techLogos.map((logo) => (
              <div key={logo.id}>
                <FontAwesomeIcon icon={logo.icon} size="4x" />
                <small>{logo.content}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="projects">
          <h1 className="home__heading">
            Check out{" "}
            <span className="home__heading--secondary">some of my work</span>
          </h1>

          <div className="projects__cards">
            <div className="tab">
              {tabTitle.map((title) => (
                <button className="tab__title">{title}</button>
              ))}
            </div>
            <div className="projects__container">
              {projects.map((project) => (
                <Card project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyWork;
