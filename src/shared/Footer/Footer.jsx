import React from "react";
import "./Footer.css";
import line from "../../assets/images/line.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images//youtube.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <p>&copy; {new Date().getFullYear()} YourCompany</p>
        <p className="logo">Landing</p>
        <button>Purchase Now</button>
      </div>
      <img src={line} className="line" />

      <div className="bottom">
        <div className="footerEnd">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="icons">
          <img src={facebook} />
          <img src={linkedin} />
          <img src={twitter} />
          <img src={youtube} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
