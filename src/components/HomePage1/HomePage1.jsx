import React from "react";
import "./HomePage1.css";
import image from "../../assets/images/image.png";
import manImage from "../../assets/images/man.png";

const HomePage1 = () => {
  return (
    <div className="home1">
      <img src={image} className="background" />
      <img src={manImage} className="manImage" />
      <div className="texts">
        <p>Introduce Your Product Quickly & Effectively</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <button className="leftButton">Purchase UI Kit</button>
        <button className="rightButton">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage1;
