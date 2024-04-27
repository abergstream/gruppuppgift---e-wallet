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
  const fetchCards = JSON.parse(localStorage.getItem("cards"));
  const [cards, setCards] = useState(fetchCards ? fetchCards : "");
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
        <Route
          path={"/addcard"}
          element={
            <AddCard
              cards={cards}
              setCards={setCards}
              setActiveCard={setActiveCard}
            />
          }
        />
        <Route path={"/wallet"} element={<Wallet cards={cards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
