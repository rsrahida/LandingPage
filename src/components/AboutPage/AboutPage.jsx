import React from "react";
import "./AboutPage.css";
import image from "../../assets/images/contact.png";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          euismod, nisi vel consectetur venenatis, erat lorem ullamcorper ante,
          eget venenatis libero eros at tortor. Phasellus et velit vitae ligula
          iaculis vehicula.
        </p>

        <h2>Our Vision</h2>
        <p className="vision">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
          consequat metus, eu dapibus ante. Duis et ex a metus maximus varius
          sed ut justo. Nam et sapien vitae augue cursus tincidunt.
        </p>

        <h2>Our Values</h2>
        <ul className="values-list">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer-centricity</li>
          <li>Sustainability</li>
        </ul>
      </div>

      <div className="about-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutPage;
