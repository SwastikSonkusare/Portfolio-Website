import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { liItems } from "../../assets/data";

import "./Header.scss";

const Header = () => {
  const menuBtnRef = useRef();
  const menuRef = useRef();
  const menuNavRef = useRef();
  const menuBrandingRef = useRef();
  const menuNavItemRef = useRef();
  const currentRoute = useHistory().location.pathname.toLowerCase();
  console.log(currentRoute);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      menuBtnRef.current.classList.add("close");
      menuRef.current.classList.add("show");
      menuNavRef.current.classList.add("show");
      menuBrandingRef.current.classList.add("show");

      setShowMenu(true);
    } else {
      menuBtnRef.current.classList.remove("close");
      menuRef.current.classList.remove("show");
      menuNavRef.current.classList.remove("show");
      menuBrandingRef.current.classList.remove("show");

      setShowMenu(false);
    }
  };

  //   const changeLinkColorHandler = () => {
  //     console.log("hihi");
  //     menuNavItemRef.forEach((item) => {
  //       item.current.classList.add("yellow");
  //     });
  //   };

  return (
    <header className="header">
      <div className="header__menu-btn" ref={menuBtnRef} onClick={toggleMenu}>
        <div className="header__btn-line"></div>
        <div className="header__btn-line"></div>
        <div className="header__btn-line"></div>
      </div>

      <nav className="menu" ref={menuRef}>
        <div className="menu__branding" ref={menuBrandingRef}>
          <div className="menu__portrait"></div>
        </div>
        <ul className="menu__nav" ref={menuNavRef}>
          {liItems.map((item) => (
            <li
              className="menu__nav-item"
              ref={menuNavItemRef}
              //   onClick={changeLinkColorHandler}
            >
              <Link
                to="/"
                className={`menu__nav-link ${
                  currentRoute === "/" ? "acitve" : ""
                }`}
              >
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
