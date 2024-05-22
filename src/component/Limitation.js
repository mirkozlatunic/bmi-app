import React from "react";
import Cards from "./Cards";
import lineRight from "../assets/images/pattern-curved-line-right.svg";

import "./Limitation.css";

const Limitation = () => {
  return (
    <div className="limitation__container">
      <div className="limitation__block">
        <h2 className="limitation__title">Limitations of BMI</h2>
        <p className="limitation__text">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
        <img
          src={lineRight}
          alt="line right"
          className="limiation_line-right"
        />
      </div>
      <Cards />
    </div>
  );
};

export default Limitation;
