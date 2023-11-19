import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive((prevActive) =>
      prevActive === "nav__menu" ? "nav__menu nav__active" : "nav__menu"
    );

    // Icon Toggler
    setIcon((prevIcon) =>
      prevIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
    );
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <img src={logo} alt="hii" width={130} height={40} />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/skills" className="nav__link">
            Skills
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className="nav__link">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
