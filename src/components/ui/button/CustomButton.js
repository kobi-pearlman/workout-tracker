import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ text, isCancel, handleClick }) => (
  <button
    onClick={() => handleClick()}
    className={`custom-btn ${isCancel ? "cancel-btn" : null}`}
  >
    {text}
  </button>
);
export default CustomButton;
