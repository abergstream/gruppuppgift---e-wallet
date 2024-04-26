import React from "react";
import "./CardForm.css";

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
}) => {
  console.log(cards);

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
      <button>ADD CARD</button>
    </section>
  );
};

export default CardForm;
