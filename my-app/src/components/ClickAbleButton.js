import React from "react";

const ClickAbleButton = ({ btnText, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default ClickAbleButton;
