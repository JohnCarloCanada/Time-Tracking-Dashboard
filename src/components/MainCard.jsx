import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "./MainCard.css";
import imageJeremy from "../assets/image-jeremy.png";

const MainCard = () => {
  const { timeframe, setTimeframe } = useContext(DataContext);
  return (
    <div className="main__grid">
      <div className="main__grid__first__container">
        <header>
          <h1 className="sr-only">Time Tracking Dashboard</h1>
        </header>
        <img aria-hidden="true" className="imageJeremy" src={imageJeremy} alt="Image of jeremy" />
        <div className="main__grid__author__report">
          <p>Report For</p>
          <h2 className="no-split">Jeremy Robson</h2>
        </div>
      </div>
      <ul className="main__grid__reports">
        <li
          title="Daily Tab"
          aria-label="Go To Daily Tab"
          onClick={(e) => setTimeframe(e.target.innerText)}
          className={timeframe === "Daily" ? "selected" : ""}
        >
          Daily
        </li>
        <li
          title="Weekly Tab"
          aria-label="Go To Weekly Tab"
          onClick={(e) => setTimeframe(e.target.innerText)}
          className={timeframe === "Weekly" ? "selected" : ""}
        >
          Weekly
        </li>
        <li
          title="Monthly Tab"
          aria-label="Go To Monthly Tab"
          onClick={(e) => setTimeframe(e.target.innerText)}
          className={timeframe === "Monthly" ? "selected" : ""}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default MainCard;
