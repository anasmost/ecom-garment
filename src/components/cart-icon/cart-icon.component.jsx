import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectItemCount } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCart, itemsCount }) => (
  console.log("cart-icon rendered !!!!!!!!!!!!!!!!"),
  (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon />
      <span className="item-count">{itemsCount}</span>
    </div>
  )
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = (state) => ({
  itemsCount: selectItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
