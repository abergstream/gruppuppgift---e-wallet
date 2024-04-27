import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import AddCardButton from "../components/AddCardButton";

const Home = ({ cards, activeCard, setActiveCard }) => {
  // cardStack innehåller alla kort förutom det aktiva kortet
  const cardStack = cards
    ? cards.filter((card) => {
        return card != activeCard;
      })
    : "";
  return (
    <section className="wrapper">
      <Top title={"e-wallet"} subheading={"Active Card"} />
      {cards ? (
        <>
          <Card card={activeCard} />
          <CardStack allCards={cardStack} setActiveCard={setActiveCard} />
        </>
      ) : (
        <h2 className="not-available">
          <em>No cards available</em>
        </h2>
      )}
      <AddCardButton />
    </section>
  );
};

export default Home;
