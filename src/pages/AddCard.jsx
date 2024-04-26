import React, { useState } from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import CardForm from "../components/CardForm";

const AddCard = ({ cards, setCards }) => {
  const [cardNumber, setCardNumber] = useState("1234567891011213");
  const [cardName, setCardName] = useState("Andreas Bergström");
  const [validThru, setValidThru] = useState("10 / 25");
  const [vendor, setVendor] = useState("bitcoin");
  const [ccv, setCcv] = useState("");

  return (
    <>
      <Top title={"add a new bank card"} subheading={"New Card"} />
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
      />
    </>
  );
};

export default AddCard;
