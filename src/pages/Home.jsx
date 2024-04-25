import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";

const Home = ({ cards, activeCard, setActiveCard }) => {
  return (
    <>
      <Top title={"e-wallet"} subheading={"Active Card"} />
      {/*
      Man kan antingen skicka in alla värden som nedan.
      Detta för att Christoffers del ska funka dynamiskt
      */}
      <Card
        cardNumber={"1234512515152"}
        vendor={"ninja"}
        cardName={"Andreas Bergström"}
        validThru={"12/25"}
        ccv={"123"}
      />
      {/*
       I Home och CardStack skickar vi in hela kortinfon för enklare hantering
       Exempelvis: <Card card={cards[0]} />
      */}
      <br />
      <Card card={activeCard} />
    </>
  );
};

export default Home;
