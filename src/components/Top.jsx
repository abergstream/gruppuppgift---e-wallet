import React from "react";
import "./Top.css";
const Top = ({ title, subheading }) => {
  return (
    <>
      <h1 className="heading">{title.toUpperCase()}</h1>
      <h2 className="subheading">{subheading.toUpperCase()}</h2>
    </>
  );
};

export default Top;
