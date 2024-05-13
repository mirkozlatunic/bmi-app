import React from "react";
import logo from "../assets/images/logo.svg";

import "./Hero.css";

const buttons = ["Metric", "Imperial"];
const data = ["Height", "Weight"];

const Hero = () => {
  const renderButton = buttons.map((button) => {
    return (
      <label>
        <input type="radio" />
        {button}
      </label>
    );
  });

  const yourData = data.map((data) => {
    return (
      <label>
        {data}
        <input type="number" />
      </label>
    );
  });

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
        <div className="hero__radio">{renderButton}</div>
        <div className="hero__input">{yourData}</div>
      </div>
    </div>
  );
};

export default Hero;
