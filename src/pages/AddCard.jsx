import React, { useState } from "react";
import Top from "../components/Top";
import Card from "../components/Card";

const AddCard = () => {
  // När kort läggs till, lägg till i detta format:
  // cards = [
  //   {
  //     cardNumber: "1234567891011123",
  //     cardName: "RACHEL RICHTER",
  //     validThru: "05/25",
  //     ccv: "666",
  //     vendor: "ninja",
  //   },
  //   {
  //     cardNumber: "1234567891011123",
  //     cardName: "Andreas Bergström",
  //     validThru: "04/26",
  //     ccv: "666",
  //     vendor: "evil",
  //   },
  // ];

  /*
    Ändra setVariablerna genom att ändra inputfälten i din komponent Christoffer
    Har satt ett standardvärde bara för att testa, vi nollar dem sen 
  */
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
    </>
  );
};

export default AddCard;
