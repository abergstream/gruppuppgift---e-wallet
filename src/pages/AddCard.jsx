import React, { useState } from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import { Link } from "react-router-dom";


const AddCard = ({ cards }) => {
  const [cardNumber, setCardNumber] = useState("1234567891011213");
  const [cardName, setCardName] = useState("Andreas Bergström");
  const [validThru, setValidThru] = useState("10 / 25");
  const [vendor, setVendor] = useState("evil");
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
      <section className="add-card-container">
      <Link to="/" className="add-card-button">ADD CARD</Link>
      </section>
    </>
  );
};

export default AddCard;
