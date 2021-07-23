import React, { useState } from "react";

import { useToasts } from "react-toast-notifications";

import emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { contactLogos } from "../../assets/data";
import iconError from "../../assets/images/icon-error.svg";

import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { addToast } = useToasts();

  const formHandler = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    }

    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }

    if (name && message && email) {
      sendEmail(e);
    }
  };

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          addToast("Your message has been sent successfully", {
            appearance: "success",
            autoDismiss: true,
          });

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          addToast(error, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      );
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
          <div className="form__control">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <>
                <img src={iconError} alt=""></img>
                <small>Name cannot be empty</small>
              </>
            )}
          </div>
          <div className="form__control">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <>
                <img src={iconError} alt=""></img>
                <small>Looks like this is not an email</small>
              </>
            )}
          </div>
        </div>

        <div className="form__control">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form__text-area"
          ></textarea>
          {messageError && (
            <>
              <img src={iconError} alt=""></img>
              <small>Message cannot be empty</small>
            </>
          )}
        </div>
        <button className="form__button" type="submit">
          Send
          <FontAwesomeIcon icon={faPaperPlane} size="1x" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
