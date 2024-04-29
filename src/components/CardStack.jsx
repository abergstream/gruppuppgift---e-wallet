import React from "react";
import Card from "./Card";
import "./CardStack.css";
const CardStack = ({ allCards, setActiveCard }) => {
  return (
    <>
      <section
        className={"card-stack-container"}
        style={{ height: `${255 + (allCards.length - 1) * 50}px` }}
      >
        {allCards.map((card, index) => {
          return (
            <div
              key={index}
              onClick={(e) => {
                const cardContainer = e.currentTarget;
                testDiv.classList.add("card-swipe");
                setTimeout(() => {
                  setActiveCard(card);
                  cardContainer.classList.remove("card-swipe");
                }, 200);
              }}
              className={"card-stack"}
              style={{ top: `${index * 50}px` }}
            >
              <Card card={card} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CardStack;
