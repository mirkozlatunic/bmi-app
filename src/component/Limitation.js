import React from "react";
import lineRight from "../assets/images/pattern-curved-line-right.svg";
import { cards } from "../constants/index";

import "./Limitation.css";
import "./Cards.css";

const Limitation = () => {
  const renderedCards = cards.map((card, index) => {
    return (
      <div key={index} className="card__container">
        <div className="card__block">
          <img src={card.image} alt="" />
          <h2 className="card__title">{card.title}</h2>
        </div>
        <div className="card__textblock">
          <p className="card__text">{card.text}</p>
        </div>
      </div>
    );
  });
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
      </div>
      <img src={lineRight} alt="line right" className="limiation_line-right" />
      {renderedCards}
    </div>
  );
};

export default Limitation;
