import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import EWallet from "./pages/EWallet";
import AddCard from "./pages/AddCard";

// To-Do
// npm install react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<EWallet />} />
        <Route path={"/addcard"} element={<AddCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
