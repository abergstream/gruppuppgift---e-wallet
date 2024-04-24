import React from "react";
import "./Card.css";

const Card = ({ newCard }) => {
  const cards = [
    {
      cardNumber: "1234 5678 9101 1123",
      cardName: "RACHEL RICHTER",
      validThru: "05/25",
      ccv: "666",
      vendor: "bitcoin",
    },
  ];
  return (
    <section className={`card card--${cards[0].vendor}`}>
      <div className="card__space-between">
        <div className="card__blipp-container">
          <img className="card__image" src="gfx/blipp_dark.png" alt="" />
        </div>
        <img
          className="card__image"
          src={`gfx/${cards[0].vendor}.png`}
          alt=""
        />
      </div>
      <div>
        <img className="card__image--chip" src="gfx/chip.png" alt="" />
      </div>
      <h3 className="card__card-number">{cards[0].cardNumber}</h3>
      <div className="card__space-between">
        <p className="card__card-title">CARDHOLDER NAME</p>
        <p className="card__card-title">VALID THRU</p>
      </div>
      <div className="card__space-between">
        <p className="card__card-info">
          {newCard ? "NYTT NAMN" : cards[0].cardName}
        </p>
        <p className="card__card-info">{cards[0].validThru}</p>
      </div>
    </section>
  );
};

export default Card;
