import React from "react";
import { Link } from "react-router-dom";

import { liItems } from "../../assets/data";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-btn">
        <div className="header__btn-line"></div>
        <div className="header__btn-line"></div>
        <div className="header__btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu__branding">
          <div className="menu__portrait"></div>
        </div>
        <ul className="menu__nav">
          {liItems.map((item) => (
            <li className="menu__nav-item">
              <Link to="/" className="menu__nav-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
