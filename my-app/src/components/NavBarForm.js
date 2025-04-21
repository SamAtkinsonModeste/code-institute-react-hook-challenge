import React, { Component } from "react";
import ClickAbleButton from "./ClickAbleButton";
import NavBarChild from "./NavBarChild";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>

        {this.state.isLoggedIn ? (
          <NavBarChild handleClick={this.handleClick} />
        ) : (
          <ClickAbleButton btnText="Log In" onClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default NavBarForm;
