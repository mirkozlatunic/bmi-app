import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

import "./Hero.css";

const Hero = () => {
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const textTypeHandler = (e) => {
    if (!e.target.value.match(/\D/g)) setTextValue(e.target.value);
  };

  const numberTypeHandler = (e) => {
    setNumberValue(e.target.value);
  };

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = weightValue(heightInMeters * heightInMeters).toFixed(2);
      setBmiValue(bmi);

      let message =
        "Enter your height and weight and you’ll see your BMI result here";
      if (bmi < 18.5) {
        message = `${"Your BMI suggests you’re a underweight. Your ideal weight is between 63.3kgs - 85.2kgs."}`;
      } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `${"Your BMI suggests you’re a healthy weight. Your ideal weight is between 63.3kgs - 85.2kgs."}`;
      } else if (bmi >= 24.0 && bmi < 29.9) {
        message = `${"Your BMI suggests you’re a overweight. Your ideal weight is between 63.3kgs - 85.2kgs."}`;
      } else {
        message = `${"Your BMI suggests you’re a obese. Your ideal weight is between 63.3kgs - 85.2kgs."}`;
      }
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };

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
                defaultChecked
              />
              Metric
            </label>
            <label className="hero__radio-label">
              <input
                type="radio"
                name="selection"
                className="hero__radio-button"
              />
              Imperial
            </label>
          </div>
          <div className="hero__bmi">
            <div className="hero__entry">
              <div className="hero__input-text">Height</div>
              <input
                type="text"
                name="input"
                placeholder="0"
                className="hero__input"
                maxLength={3}
                value={textValue}
                onChange={textTypeHandler}
                height={heightValue}
              />
              <p className="hero__input-uom-left">cm</p>
            </div>
            <div className="hero__entry">
              <div className="hero__input-text">Weight</div>
              <input
                type="text"
                name="input"
                placeholder="0"
                className="hero__input"
                maxLength={3}
                value={numberValue}
                onChange={numberTypeHandler}
                weight={weightValue}
              />
              <p className="hero__input-uom-right">kg</p>
            </div>
          </div>
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
