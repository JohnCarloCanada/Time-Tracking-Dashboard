import React from "react";
import "./Card.css";
import ellipsis from "../assets/icon-ellipsis.svg";

const Card = ({ title, img, current, previous }) => {
  return (
    <section className={`sub__grid ${title.split(" ").join("").toLowerCase()}`} style={{ backgroundImage: `url(${img})` }}>
      <div className="timeframes__info">
        <div className="header">
          <h3>{title}</h3>
          <img src={ellipsis} alt="ellipsis" />
        </div>
        <div className="timeframes">
          <h2 className="current">{current}hrs</h2>
          <h3 className="previous no-split">
            last Week - <span>{previous}hrs</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Card;
