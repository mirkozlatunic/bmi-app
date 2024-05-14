import React from "react";
import logo from "../assets/images/logo.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero__section-left">
        <img className="hero__logo" src={logo} alt="logo" />
        <h1 className="hero__title">
          Body Mass
          <br /> Index Calculator
        </h1>
        <p className="hero__text">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <div className="hero__section-right">
        <h2 className="hero__title-modal">Enter your details below</h2>
        <div className="hero__data">
          <div className="hero__radio">
            <label className="hero__radio-label">
              <input
                type="radio"
                name="selection"
                className="hero__radio-button"
              />
              Metric
            </label>
          </div>
          <div className="hero__radio">
            <label className="hero__radio-label">
              <input
                type="radio"
                name="selection"
                className="hero__radio-button"
              />
              Imperial
            </label>
          </div>
          <div className="hero__input-text">Height</div>
          <div className="hero__input-text">Weight</div>
          <input
            type="text"
            name="input"
            placeholder="0"
            className="hero__input"
          />
          <input
            type="text"
            name="input"
            placeholder="0"
            className="hero__input"
          />
          <div className="hero__result">
            <h2 className="hero__result-title">Welcome!</h2>
            <p className="hero__result-text">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
