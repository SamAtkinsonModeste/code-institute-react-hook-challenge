import React from "react";
import ClickAbleButton from "./ClickAbleButton";
import RequiredInputs from "./RequiredInputs";

const NavBarChild = ({ handleClick }) => {
  return (
    <form>
      <RequiredInputs
        label="Username"
        type="text"
        id="username"
        name="username"
        placeholder="User Name"
      />
      <RequiredInputs
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <ClickAbleButton btnText="Submit" onClick={handleClick} type="submit" />
    </form>
  );
};

export default NavBarChild;
