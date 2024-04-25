import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Wallet = ({ cards }) => {
  //   const [cards, setCards] = useState([]); ska ej vara med
  const [activeCardId, setActiveCardId] = useState(null); // State to track the active card

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
          cards.map((card, index) => (
            <li
              key={index}
              onClick={() => handleCardClick(card.cardNumber)}
              style={{
                cursor: "pointer",
                backgroundColor: activeCardId === card.cardNumber ? "#ccc" : "",
              }}
            >
              <Card newCard={false} card={card} />
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
