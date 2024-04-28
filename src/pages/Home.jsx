import React from "react";
import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import AddCardButton from "../components/AddCardButton";

const Home = ({ cards, setCards, activeCard, setActiveCard }) => {
  const deleteCard = (card) => {
    const newCards = cards.filter((newCard) => {
      return newCard.cardID != card.cardID;
    });
    localStorage.setItem("cards", JSON.stringify(newCards));
    setCards(newCards);
    setActiveCard(cards[0]);
  };
  // Om det finns kort inlagda innehåller cardStack alla kort förutom det aktiva kortet
  const cardStack = cards
    ? cards.filter((card) => {
        return card != activeCard;
      })
    : "";
  return (
    <section className="wrapper">
      <Top title={"e-wallet"} subheading={"Active Card"} cards={cards} />
      {cards ? (
        <>
          <section className="active-card__container">
            <Card card={activeCard} />
            <button
              className="active-card__button-delete"
              onClick={() => {
                deleteCard(activeCard);
              }}
            >
              Delete Card
            </button>
          </section>
          <hr className="active-card__spacer" />
          <CardStack allCards={cardStack} setActiveCard={setActiveCard} />
        </>
      ) : (
        <h2 className="not-available">
          <p>No cards available</p>
          <p className="not-available__text--small">
            <em>Use the button below to add cards</em>
          </p>
        </h2>
      )}
      <AddCardButton />
    </section>
  );
};

export default Home;
