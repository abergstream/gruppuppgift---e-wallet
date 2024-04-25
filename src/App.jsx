import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

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
      vendor: "ninja",
    },
    {
      cardID: 102,
      cardNumber: "1234567891011123",
      cardName: "Andreas Bergström",
      validThru: "04/26",
      ccv: "666",
      vendor: "evil",
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home cards={cards} />} />
        <Route path={"/addcard"} element={<AddCard cards={cards} />} />
        <Route path={"/wallet"} element={<Wallet cards={cards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
