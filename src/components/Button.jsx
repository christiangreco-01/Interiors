import React from "react";
import "../style/button.css";

export const Button = ({ name }) => {
  return (
    <div>
      <button className="whitespace-nowrap">{name}</button>
    </div>
  );
};
