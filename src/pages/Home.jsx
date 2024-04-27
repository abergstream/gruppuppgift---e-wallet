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
    <>
      <Top title={"e-wallet"} subheading={"Active Card"} />
      {/*
    Man kan antingen skicka in alla värden som nedan.
    Detta för att Christoffers del ska funka dynamiskt
    */}
      {/* <Card
      cardNumber={"1234512515152"}
      vendor={"ninja"}
      cardName={"Andreas Bergström"}
      validThru={"12/25"}
      ccv={"123"}
    /> */}
      {/*
     I Home och CardStack skickar vi in hela kortinfon för enklare hantering
     Exempelvis: <Card card={cards[0]} />
    */}
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
    </>
  );
};

export default Home;
