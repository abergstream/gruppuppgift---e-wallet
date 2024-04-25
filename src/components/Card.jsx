import React, { useState } from "react";
import "./Card.css";

const Card = ({ newCard, cardNumber, cardName, validThru, ccv, vendor }) => {
  const cardss = [
    {
      cardNumber: "8234567891011333",
      cardName: "RACHEL RICHTER",
      validThru: "05/25",
      ccv: "666",
      vendor: "ninja",
    },
    {
      cardNumber: "1234567891011123",
      cardName: "Andreas Bergström",
      validThru: "04/26",
      ccv: "666",
      vendor: "evil",
    },
  ];
  localStorage.setItem("cards", JSON.stringify(cardss));
  // Hämtar cards ifrån localstorage
  const storedCards = localStorage.getItem("cards");

  // Om den hittar något i localStorage, sätt dessa som defaultvärde
  // Om det inte finns något i localStorage sätts "" som värde
  const [cards, setCards] = useState(
    storedCards ? JSON.parse(storedCards) : ""
  );

  console.log(cards);
  return cards ? (
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
        <img
          className="card__image"
          src={`gfx/${newCard ? vendor : vendor}.png`}
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
        {/* Först kollar den om newCard === true
          Sen kollar den om cardNumber har ett värde: Isåfall gör ett mellanslag efter var fjärde siffra
        Om newCard inte är true
          Hämta cards[0]'s kortnummer */}
        {newCard
          ? cardNumber
            ? cardNumber.match(/.{1,4}/g).join(" ")
            : ""
          : cardNumber.match(/.{1,4}/g).join(" ")}
      </h3>
      <div className="card__space-between">
        <p className="card__card-title">CARDHOLDER NAME</p>
        <p className="card__card-title">VALID THRU</p>
      </div>
      <div className="card__space-between">
        <p className="card__card-info">
          {/* Om newCard === true, skriv ut propsen cardName
          Om newCard !== true, skriv ut cardName */}
          {newCard ? cardName : cardName}
        </p>
        <p className="card__card-info">
          {/* Om newCard === true, skriv ut propsen validThru
          Om newCard !== true, skriv ut validThru */}
          {newCard ? validThru : validThru}
        </p>
      </div>
    </section>
  ) : (
    <h2>Det finns inga kort att visa</h2>
  );
};

export default Card;
