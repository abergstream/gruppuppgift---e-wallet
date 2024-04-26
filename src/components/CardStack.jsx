import React from "react";
import Card from "./Card";
import "./CardStack.css";
const CardStack = ({ allCards, setActiveCard }) => {
  console.log(allCards);
  return (
    <>
      <section className={"card-stack-container"}>
        {allCards.map((card, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActiveCard(card);
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
