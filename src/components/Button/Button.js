import React from "react";

import resume from "../../assets/Swastik Sonkusare Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Button = ({ noMargin }) => {
  return (
    <button className={`about__button ${noMargin && "home__margin"}`}>
      <a href={resume} download>
        Download CV
      </a>
      <FontAwesomeIcon
        icon={faDownload}
        size="1x"
        className="about__button-icon"
      />
    </button>
  );
};

export default Button;
