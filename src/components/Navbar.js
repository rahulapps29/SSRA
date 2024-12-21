import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo1.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
       
       <div className="navbar-brand">
  <div className="navbar-logo">
    <img src={logo} alt="Company Logo" />
  </div>
  <span className="navbar-text">SSRA & Company</span>
</div>


      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to="/services"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
