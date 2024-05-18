import React from "react";
import imageGuy from "../assets/images/image-man-eating.webp";
import lineLeft from "../assets/images/pattern-curved-line-left.svg";

import "./Results.css";

const Results = () => {
  return (
    <div className="results__container">
      <img src={imageGuy} alt="guy" className="results__pic" />
      <div className="results__right">
        <img src={lineLeft} alt="curve left" className="results__curve-right" />
        <div className="results__text">
          <h2 className="results__title">What your BMI result means</h2>
          <p className="results__para">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
