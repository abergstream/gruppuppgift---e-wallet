import React from "react";
import "./Top.css";
const Top = ({ title }) => {
  return <h1 className="heading">{title.toUpperCase()}</h1>;
};

export default Top;
