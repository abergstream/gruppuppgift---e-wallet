import React from "react";
import "./CardForm.css";
import { Link } from "react-router-dom";
import "./Button.css";
const CardForm = ({
  cards,
  setCards,
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  validThru,
  setValidThru,
  vendor,
  setVendor,
  ccv,
  setCcv,
  setActiveCard,
}) => {
  const handleSubmit = () => {
    if (cardNumber.length === 16 && cardName && validThru && ccv && vendor) {
      console.log();
      const newCard = {
        cardID: cards.length + 1,
        cardNumber: cardNumber,
        cardName: cardName.toUpperCase(),
        validThru: validThru,
        ccv: ccv,
        vendor: vendor,
      };
      // Om det är första kortet man lägger till, sätt detta som activeCard
      cards.length === 0 ? setActiveCard(newCard) : "";

      // Lägger till kortet i cards-arrayen
      setCards([...cards, newCard]);
      setCardNumber("");
      setCardName("");
      setValidThru("");
      setCcv("");
      localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
      alert("Kort tillagt!");
      console.log(cards);
    } else alert("Please fill out the form!");
  };
  return (
    <section className="card-form">
      <label className="card-form-label" htmlFor="cardNumber">
        CARD NUMBER
      </label>
      <input
        className="card-form-input"
        id="cardNumber"
        type="number"
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(e.target.value);
        }}
      />
      <label className="card-form-label" htmlFor="cardName">
        CARDHOLDER NAME
      </label>
      <input
        className="card-form-input"
        id="cardName"
        type="text"
        value={cardName}
        onChange={(e) => {
          setCardName(e.target.value);
        }}
      />
      <label className="card-form-label" htmlFor="validThru">
        VALID THRU
      </label>
      <input
        className="card-form-input"
        id="validThru"
        type="text"
        value={validThru}
        onChange={(e) => {
          setValidThru(e.target.value);
        }}
      />
      <label className="card-form-label" htmlFor="ccv">
        CCV
      </label>
      <input
        className="card-form-input"
        id="ccv"
        type="number"
        value={ccv}
        onChange={(e) => {
          setCcv(e.target.value);
        }}
      />
      <label className="card-form-label" htmlFor="vendor">
        VENDOR
      </label>
      <select
        className="card-form-select"
        name="vendor"
        id="vendor"
        onChange={(e) => {
          setVendor(e.target.value);
        }}
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="chain">Chain</option>
        <option value="evil">Evil</option>
        <option value="ninja">Ninja</option>
      </select>
      <button
        className="add-card-button add-card-button--add-card"
        onClick={handleSubmit}
      >
        ADD CARD
      </button>
    </section>
  );
};

export default CardForm;
