import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
  <>
    <section className="add-card-container">
      <Link to="/addcard" className="add-card-button">ADD A NEW CARD</Link>
    </section>
  </>
  )
};

export default Button;