import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { contactLogos } from "../../assets/data";

import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    if (!name.value) {
      // firstNameError.classList.toggle("visible");
      // field1.classList.toggle("visible");
    }

    if (!validateEmail(email.value)) {
      // emailError.classList.toggle("visible");
      // field3.classList.toggle("visible");
    }

    if (!message.value) {
      // passwordError.classList.toggle("visible");
      // field4.classList.toggle("visible");
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

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

      <form className="form" action="" method="post" onSubmit={formHandler}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
