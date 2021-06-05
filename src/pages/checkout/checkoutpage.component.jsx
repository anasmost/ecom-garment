import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectTotalPrice } from "../../redux/cart/cart.selectors";
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutPage);
