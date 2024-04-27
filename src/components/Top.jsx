import React from "react";
import "./Top.css";
const Top = ({ title, subheading, cards }) => {
  return (
    <>
      <h1 className="heading">{title.toUpperCase()}</h1>
      {cards ? <h2 className="subheading">{subheading.toUpperCase()} </h2> : ""}
    </>
  );
};

export default Top;
