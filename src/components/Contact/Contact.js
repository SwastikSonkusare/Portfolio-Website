import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contactLogos } from "../../assets/data";

import "./Contact.scss";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        {contactLogos.map((logo) => (
          <div className="contact__logos" key={logo.id}>
            <FontAwesomeIcon icon={logo.icon} size="2x" />
            <span className="contact__content">{logo.content}</span>
          </div>
        ))}
      </div>

      <Form />
    </div>
  );
};

export default Contact;
