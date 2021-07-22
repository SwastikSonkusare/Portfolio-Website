import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";



import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__info">
        {logos.map((logo) => (
          <div className="contact__logos">
            <FontAwesomeIcon icon={logo} size="2x" />
          </div>
        ))}
      </div>

      <form className="form" action="" method="post">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="form__input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form__input"
            required
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="form__text-area"
        ></textarea>
        <button className="form__button" type="submit">
          Send
          <FontAwesomeIcon icon={faPaperPlane} size="1x" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
