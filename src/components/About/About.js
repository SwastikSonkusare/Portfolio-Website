import React from "react";

import resume from "../../assets/Swastik Sonkusare Resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "./About.scss";

const About = () => {
  return (
    <main id="about" className="about">
      <h1 className="home__heading">
        About <span className="home__heading--secondary">Me</span>
      </h1>
      {/* <h2 className="home__sub-heading">Web Developer</h2> */}
      <div className="about__info">
        <div className="menu__portrait"></div>
        <div className="about__bio">
          <h3 className="home__heading--secondary">Bio</h3>
          <p>
            I'm Full Stack Web Developer but more importantly I'm passionate
            about technologies.
            <br />I am always eager to learn new skills and grow my technical
            skill set in a team-based atomosphere.
          </p>
          <button className="about__button">
            <a download="" href={resume}>
              Download CV
            </a>
            <FontAwesomeIcon
              icon={faDownload}
              size="1x"
              className="about__button-icon"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
