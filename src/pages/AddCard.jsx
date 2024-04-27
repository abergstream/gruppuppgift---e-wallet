import React, { useState } from "react";
import Top from "../components/Top";
import Card from "../components/Card";

import HomeButton from "../components/HomeButton";

import CardForm from "../components/CardForm";
import ModalMessage from "../components/ModalMessage";

const AddCard = ({ cards, setCards, setActiveCard }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [validThru, setValidThru] = useState("");
  const [vendor, setVendor] = useState("bitcoin");
  const [ccv, setCcv] = useState("");

  return (
    <section className="wrapper">
      {errorMsg || successMsg ? (
        <ModalMessage
          error={errorMsg ? true : false}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          successMsg={successMsg}
          setSuccessMsg={setSuccessMsg}
        />
      ) : (
        ""
      )}
      <Top title={"add a new bank card"} subheading={"New Card"} cards={true} />
      <Card
        newCard={true}
        cardNumber={cardNumber}
        cardName={cardName}
        validThru={validThru}
        vendor={vendor}
      />

      <CardForm
        cards={cards}
        setCards={setCards}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardName={cardName}
        setCardName={setCardName}
        validThru={validThru}
        setValidThru={setValidThru}
        vendor={vendor}
        setVendor={setVendor}
        ccv={ccv}
        setCcv={setCcv}
        setActiveCard={setActiveCard}
        setErrorMsg={setErrorMsg}
        setSuccessMsg={setSuccessMsg}
      />
      <HomeButton />
    </section>
  );
};

export default AddCard;
