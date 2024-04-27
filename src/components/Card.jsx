import React, { useState } from "react";
import "./Card.css";

const Card = ({
  newCard,
  cardNumber,
  cardName,
  validThru,
  ccv,
  vendor,
  card,
  cardStack,
}) => {
  return (
    <section
      className={`card card--${newCard ? "new" : card ? card.vendor : vendor} `}
    >
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
        <img
          className="card__image"
          src={`gfx/${card ? card.vendor : vendor}.png`}
          alt=""
        />
      </div>
      <div>
        <img
          className="card__image--chip"
          src={`gfx/chip${newCard ? "-dark" : ""}.png`}
          alt=""
        />
      </div>
      <h3 className="card__card-number">
        {card
          ? card.cardNumber
            ? card.cardNumber.match(/.{1,4}/g).join(" ")
            : ""
          : cardNumber
          ? cardNumber
              .match(/.{1,4}/g)
              .join(" ")
              .slice(0, 19)
          : ""}
      </h3>
      <div className="card__space-between">
        <p className="card__card-title">CARDHOLDER NAME</p>
        <p className="card__card-title">VALID THRU</p>
      </div>
      <div className="card__space-between">
        <p className="card__card-info">{card ? card.cardName : cardName}</p>
        <p className="card__card-info">{card ? card.validThru : validThru}</p>
      </div>
    </section>
  );
};

export default Card;
