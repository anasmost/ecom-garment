import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./checkoutpage.styles.scss";

const CheckoutPage = ({ cartItems, total = 0 }) => {
  return (
    <table className="checkout-page">
      <thead className="checkout-header">
        <th>Product</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </tbody>
      <tfoot className="total">TOTAL: ${total}</tfoot>
    </table>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CheckoutPage);
