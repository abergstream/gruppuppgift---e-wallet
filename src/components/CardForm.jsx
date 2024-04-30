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
  setErrorMsg,
  setSuccessMsg,
}) => {
  const showError = (cardInfo) => {
    let errorMessage = [];
    cardInfo.cardNumber.length !== 16
      ? errorMessage.push("Card number needs to be 16 characters")
      : "";
    !cardInfo.cardName ? errorMessage.push("Missing cardholder name") : "";
    cardInfo.validThru.length !== 7
      ? errorMessage.push('Missing Valid thru, e.g "09 / 25" (Not 09/25)')
      : "";
    cardInfo.ccv.length != 3
      ? errorMessage.push("CCV needs to be 3 characters long")
      : "";
    !cardInfo.vendor
      ? errorMessage.push(
          "Somehow to succeeded to delete the vendor value, reload the page and try again"
        )
      : "";
    setErrorMsg(errorMessage);
  };

  const handleSubmit = () => {
    if (
      cardNumber.length === 16 &&
      cardName &&
      validThru.length === 7 &&
      ccv.length === 3 &&
      vendor
    ) {
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
      // Lägger till korten i localStorage
      localStorage.setItem("cards", JSON.stringify([...cards, newCard]));
      // Sätter successMsg (som visar en modal)
      setSuccessMsg(["Go to Home to view your cards"]);
    } else {
      const cardInfo = {
        cardID: cards.length + 1,
        cardNumber: cardNumber,
        cardName: cardName,
        validThru: validThru,
        ccv: ccv,
        vendor: vendor,
      };

      showError(cardInfo);
    }
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
        placeholder="1234 5678 9101 1121"
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
        placeholder="FIRSTNAME, LASTNAME"
        onChange={(e) => {
          setCardName(e.target.value);
        }}
      />
      <div className="card-form__space-between">
        <aside className="card-form__card-info">
          <label className="card-form-label" htmlFor="validThru">
            VALID THRU
          </label>
          <input
            className="card-form-input"
            id="validThru"
            type="text"
            value={validThru}
            placeholder="09 / 25"
            onChange={(e) => {
              setValidThru(e.target.value);
            }}
          />
        </aside>
        <aside className="card-form__card-info">
          <label className="card-form-label" htmlFor="ccv">
            CCV
          </label>
          <input
            className="card-form-input"
            id="ccv"
            type="number"
            value={ccv}
            placeholder="032"
            onChange={(e) => {
              setCcv(e.target.value);
            }}
          />
        </aside>
      </div>
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
