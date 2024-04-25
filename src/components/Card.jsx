import React, { useState } from "react";
import "./Card.css";

const Card = ({ newCard, cardNumber, cardName, validThru, ccv, vendor }) => {
  log;
  return (
    <section className={`card card--${newCard ? "new" : vendor}`}>
      <div className="card__space-between">
        <div className="card__blipp-container">
          <img
            className="card__image"
            src={`gfx/blipp_${
              !newCard ? (vendor === "bitcoin" ? "dark" : "light") : "dark"
            }.png`}
            alt=""
          />
        </div>
        <img className="card__image" src={`gfx/${vendor}.png`} alt="" />
      </div>
      <div>
        <img
          className="card__image--chip"
          src={`gfx/chip${newCard ? "-dark" : ""}.png`}
          alt=""
        />
      </div>
      <h3 className="card__card-number">
        {cardNumber ? cardNumber.match(/.{1,4}/g).join(" ") : ""}
      </h3>
      <div className="card__space-between">
        <p className="card__card-title">CARDHOLDER NAME</p>
        <p className="card__card-title">VALID THRU</p>
      </div>
      <div className="card__space-between">
        <p className="card__card-info">{cardName}</p>
        <p className="card__card-info">{validThru}</p>
      </div>
    </section>
  );
};

export default Card;
