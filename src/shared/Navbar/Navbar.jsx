import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getActiveClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="navbar">
      <div className="navbarComponent">
        <Link to="/" className={getActiveClass("/")}>
          Home
        </Link>
        <Link to="/about" className={getActiveClass("/about")}>
          About
        </Link>
        <Link to="/contact" className={getActiveClass("/contact")}>
          Contact
        </Link>
      </div>
      <p className="logo">Landing</p>
      <Link to="/buy" className="button">
        Buy Now
      </Link>
    </div>
  );
};

export default Navbar;
