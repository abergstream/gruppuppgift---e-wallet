import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";

const Home = ({ cards }) => {
  return (
    <>
      <Top title={"e-wallet"} subheading={"Active Card"} />
      <Card cardNumber={"1234512515152"} />
    </>
  );
};

export default Home;
