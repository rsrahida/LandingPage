import React from "react";
import "./HomePage4.css";
import image from "../../assets/images/backgroundEnd.png";

const HomePage4 = () => {
  return (
    <div className="home4">
      <img src={image} />
      <p className="endTitle">A Price To Suit Everyone</p>
      <p className="endTexts">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{" "}
      </p>
      <p className="price">$40</p>
      <p className="priceText">UI Design Kit</p>
      <span>See, One price. Simple.</span>
      <button>Purchase Now</button>
    </div>
  );
};

export default HomePage4;
