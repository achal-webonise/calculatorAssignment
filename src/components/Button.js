import React from "react";

const Button = ({ onClick, label, className }) => (
  <button onClick={() => onClick(label)} className={className}>
    {label}
  </button>
);

export default Button;
