import React from "react";
import Button from "../Button/Button";

import "./About.scss";

const About = () => {
  return (
    <main id="about" className="about">
      <h1 className="home__heading">
        About <span className="home__heading--secondary">Me</span>
      </h1>
      <div className="about__info">
        <div className="menu__portrait"></div>
        <div className="about__bio">
          <h3 className="home__heading--secondary">Bio</h3>
          <p>
            I am a Full Stack Web Developer but more importantly I am passionate
            about technologies.
            <br />I am always eager to learn new skills and grow my technical
            skill-set in a team-based atmosphere.
          </p>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default About;
