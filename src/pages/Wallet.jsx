import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Wallet = () => {
  //   const [cards, setCards] = useState([]); ska ej vara med
  const [activeCardId, setActiveCardId] = useState(null); // State to track the active card

  const storedCards = localStorage.getItem("cards");
  const [cards, setCards] = useState([
    {
      cardID: 101,
      cardNumber: "1234567891011123",
      cardName: "RACHEL RICHTER",
      validThru: "05/25",
      ccv: "666",
      vendor: "ninja",
    },
    {
      cardID: 102,
      cardNumber: "1234567891011123",
      cardName: "Andreas Bergström",
      validThru: "04/26",
      ccv: "666",
      vendor: "evil",
    },
  ]);
  console.log(cards);
  const handleCardClick = (cardId) => {
    setActiveCardId(cardId); // Set the clicked card as active
  };

  const deleteActiveCard = () => {
    if (activeCardId !== null) {
      const updatedCards = cards.map((card) =>
        card.cardNumber === activeCardId ? { ...card, deleted: true } : card
      );
      setCards(updatedCards);
      localStorage.setItem("cards", JSON.stringify(updatedCards)); // Update localStorage
      setActiveCardId(null); // Reset active card ID
    }
  };

  return (
    <div>
      <h1>My Wallet</h1>
      <ul>
        {cards.length > 0 ? (
          cards.map((card) => (
            <li
              key={card.cardNumber}
              onClick={() => handleCardClick(card.cardNumber)}
              style={{
                cursor: "pointer",
                backgroundColor: activeCardId === card.cardNumber ? "#ccc" : "",
              }}
            >
              <Card
                newCard={false}
                cardNumber={card.cardNumber}
                cardName={card.cardName}
                validThru={card.validThru}
                ccv={card.ccv}
                vendor={card.vendor}
              />
            </li>
          ))
        ) : (
          <h2>No cards available</h2>
        )}
      </ul>
      {activeCardId && (
        <button className="deleteButton" onClick={deleteActiveCard}>
          Delete Active Card
        </button>
      )}{" "}
      {/* Button shows only if there is an active card */}
    </div>
  );
};

export default Wallet;
