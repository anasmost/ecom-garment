import "./checkout-item.styles.scss";
import React from "react";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <tr className="checkout-item">
      <td className="image-container">
        <img src={imageUrl} alt="item" />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">{quantity}</td>
      <td className="price">$ {price}</td>
      <td className="remove-button">&#10008;</td>
    </tr>
  );
};

export default CheckoutItem;
