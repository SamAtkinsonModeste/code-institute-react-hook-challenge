import React from "react";

const RequiredInputs = ({ label, type, id, name, placeholder }) => {
  return (
    <label htmlFor={label}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default RequiredInputs;
