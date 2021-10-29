import React from "react";
import "./style.css";
const Card = ({ name, image, desc, link }) => {
  return (
    <div className="card">
      {/* This is a card  */}
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h2 className="software-name">{name}</h2>
        <p className="software-desc">{desc}</p>
        <a className="download" href={link} target="_blank" rel="noreferrer">
          Download
        </a>
      </div>
    </div>
  );
};

export default Card;
