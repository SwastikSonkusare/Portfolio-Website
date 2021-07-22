import React from "react";

import resume from "../../assets/Swastik Sonkusare Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  return (
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
  );
};

export default Button;
