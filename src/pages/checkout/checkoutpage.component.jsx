import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cart.selectors";
import "./checkoutpage.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <table>
        <thead className="checkout-header">
          <tr className="row">
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
        <tfoot className="total">TOTAL: ${totalPrice}</tfoot>
      </table>
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp:01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutPage);
