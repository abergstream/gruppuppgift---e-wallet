import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
  <>
    <section className="add-card-container">
      <Link to="/" className="add-card-button">ADD CARD</Link>
    </section>
  </>
  )
};

export default HomeButton;