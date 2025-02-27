import React from "react";
import "./HomePage2.css";
import image from "../../assets/images/girl.png";
import title from "../../assets/images/title.png";
const HomePage2 = () => {
  return (
    <div className="home2">
      <p className="title">Light, Fast & Powerful</p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <img src={title} className="titleImage1"></img>
      <span className="titleText1">Title Goes Here</span>
      <p className="titleTexts1">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.{" "}
      </p>
      <img src={title} className="titleImage2"></img>
      <span className="titleText2">Title Goes Here</span>
      <p className="titleTexts2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.{" "}
      </p>

      <img src={image} className="girlImage" />
    </div>
  );
};

export default HomePage2;
