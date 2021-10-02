import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaIcons } from "../../assets/data";

import "./Home.scss";
import Button from "../Button/Button";

import axios from "axios";

const Home = () => {
  const noMargin = true;
  const name = ["S", "w", "a", "s", "t", "i", "k"];
  const surname = ["S", "o", "n", "k", "u", "s", "a", "r", "e"];

  // fetch("/?json=true").then(async (response) => {
  //   try {
  //     const data = await response;
  //     console.log("response data?", data);
  //   } catch (error) {
  //     console.log("Error happened here!");
  //     console.error(error);
  //   }
  // });

  // const fetch = async () => {
  //   const { data } = await axios.get("/index.html");

  //   const a = JSON.stringify(data);
  //   console.log(a);
  //   const b = JSON.parse(a);
  //   console.log(b);
  // };

  // fetch();

  return (
    <main id="home" className="home">
      <h1 className="home__heading">
        {name.map((n) => (
          <span>{n}</span>
        ))}{" "}
        <span className="home__heading--secondary">
          {surname.map((sn) => (
            <span>{sn}</span>
          ))}
        </span>
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
