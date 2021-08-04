import React from "react";

import "./Card.scss";

const Card = ({ project, toggle }) => {
  return (
    <div
      className={toggle === project.tabHeader ? "card active" : "card"}
      key={project.title}
    >
      <img className="card__image" src={project.image} alt="logo" />
      <span className="card__heading">{project.title}</span>
      <p className="card__paragraph">{project.content}</p>

      <div className="card__tools">
        <span>Stack</span>
        <div>
          {project.tools.map((tool) => (
            <small key={tool}>{tool}</small>
          ))}
        </div>
      </div>

      <div className="card__details">
        <button>
          <a href={project.code}>Code</a>
        </button>
        <button>
          <a href={project.liveDemo}>Live Demo</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
