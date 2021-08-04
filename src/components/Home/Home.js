import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaIcons } from "../../assets/data";

import "./Home.scss";
import Button from "../Button/Button";

const Home = () => {
  const noMargin = true;

  return (
    <main id="home" className="home">
      <h1 className="home__heading">
        Swastik <span className="home__heading--secondary">Sonkusare</span>
      </h1>
      <h2 className="home__sub-heading">Web Developer</h2>

      <div className="home__icons">
        {socialMediaIcons.map((icon) => (
          <a href={icon.link} key={icon.id}>
            <FontAwesomeIcon icon={icon.logo} size="3x" />
          </a>
        ))}
      </div>
      <Button noMargin={noMargin} />
    </main>
  );
};

export default Home;
