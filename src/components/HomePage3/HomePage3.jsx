import React from "react";
import "./HomePage3.css";
import { useNavigate } from "react-router-dom";

const HomePage3 = ({ features }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="home3">
      {features.map((feature) => (
        <div key={feature.id} className="featureCard">
          <div className="image">
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
          </div>
          <div className="texts">
            <p className="feature-title">{feature.title}</p>
            <span className="feature-text">{feature.text}</span>
            <button
              onClick={() => {
                handleDetailsClick(feature.id);
              }}
            >
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage3;
