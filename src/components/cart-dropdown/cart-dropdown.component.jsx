import "./cart-dropdown.styles.scss";

import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
