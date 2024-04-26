import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";

const Home = ({ cards, activeCard, setActiveCard }) => {
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
      <br />

      {cards ? (
        <>
          <Card card={activeCard} />
          <br />
          <CardStack allCards={cards} setActiveCard={setActiveCard} />
        </>
      ) : (
        <h2 className="not-available">
          <em>No cards available</em>
        </h2>
      )}
    </>
  );
};

export default Home;
