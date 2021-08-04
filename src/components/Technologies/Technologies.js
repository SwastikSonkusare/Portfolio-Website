import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { techLogos } from "../../assets/data";

import "./Technologies.scss";

const Technology = () => {
  return (
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
  );
};

export default Technology;
