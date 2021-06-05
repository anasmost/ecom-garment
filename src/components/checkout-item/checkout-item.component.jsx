import "./checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, decreaseQuantity } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ addItem, clearItem, decreaseQuantity, cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <tr className="checkout-item row">
      <td>
        <img src={imageUrl} alt="item" />
      </td>
      <td>{name}</td>
      <td className="quantity">
        <span className="arrow" onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
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
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  decreaseQuantity: (cartItem) => dispatch(decreaseQuantity(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
