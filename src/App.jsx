import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AddCard from "./pages/AddCard";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";

// För att det ska funka behöver ni köra
// npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/addcard"} element={<AddCard />} />
        <Route path={"/wallet"} element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
