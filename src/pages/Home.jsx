import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";

const Home = ({ cards }) => {
  return (
    <>
      <Top title={"e-wallet"} subheading={"Active Card"} />
      <Card card={cards[0]} />
    </>
  );
};

export default Home;
