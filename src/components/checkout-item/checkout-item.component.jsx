import "./checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { clearItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ clearItem, cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <tr className="checkout-item row">
      <td>
        <img src={imageUrl} alt="item" />
      </td>
      <td>{name}</td>
      <td>
        <span className="arrow">&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow">&#10095;</span>
      </td>
      <td>$ {price}</td>
      <td className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10008;
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
