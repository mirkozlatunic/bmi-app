import React from "react";
import bowl from "../assets/images/icon-eating.svg";
import dumbell from "../assets/images/icon-exercise.svg";
import sleep from "../assets/images/icon-sleep.svg";

import "./Tips.css";

const Tips = () => {
  return (
    <div className="tips__container">
      <div className="tips__blocks">
        <div className="tips__block">
          <img src={bowl} alt="icons" className="tips__icon" />
          <div className="text__block">
            <h2 className="tips__title">Healthy eating</h2>
            <p className="tips__text">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="tips__block">
          <img src={dumbell} alt="icons" className="tips__icon" />
          <div className="text__block">
            <h2 className="tips__title">Regular exercise</h2>
            <p className="tips__text">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="tips__block">
          <img src={sleep} alt="icons" className="tips__icon" />
          <div className="text__block">
            <h2 className="tips__title">Adequate sleep</h2>
            <p className="tips__text">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
