import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";

const Details = ({ features }) => {
  const { id } = useParams();
  const feature = features.find((f) => f.id === parseInt(id));

  return (
    <div className="details">
      {feature ? (
        <div className="content-box">
          <div className="image">
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
          </div>
          <div className="feature-info">
            <h1>{feature.title}</h1>
            <p>{feature.text}</p>
            <p className="category">Category:{feature.category}</p>
            <p className="rating">Raiting:{feature.rating}</p>
            <p className="date">Date:{feature.addedDate}</p>
          </div>
        </div>
      ) : (
        <p className="not-found">Feature not found</p>
      )}
    </div>
  );
};

export default Details;
