import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import { act } from "react-dom/test-utils";

// För att det ska funka behöver ni köra
// npm install react-router-dom

function App() {
  const [cards, setCards] = useState([
    {
      cardID: 101,
      cardNumber: "1234567891011123",
      cardName: "RACHEL RICHTER",
      validThru: "05/25",
      ccv: "666",
      vendor: "chain",
    },
    {
      cardID: 102,
      cardNumber: "9876543210987654",
      cardName: "JOHN DOE",
      validThru: "10/26",
      ccv: "777",
      vendor: "bitcoin",
    },
    {
      cardID: 103,
      cardNumber: "5555666677778888",
      cardName: "EMMA SMITH",
      validThru: "03/24",
      ccv: "888",
      vendor: "evil",
    },
    {
      cardID: 104,
      cardNumber: "4444333322221111",
      cardName: "MICHAEL JOHNSON",
      validThru: "08/27",
      ccv: "999",
      vendor: "ninja",
    },
  ]);
  const [activeCard, setActiveCard] = useState(
    cards.length > 0 ? cards[cards.length - 1] : ""
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home
              cards={cards}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          }
        />
        <Route path={"/addcard"} element={<AddCard cards={cards} />} />
        <Route path={"/wallet"} element={<Wallet cards={cards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
