import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51J071wDt8WAL7v01aZBcy2lQSkM79fLKoCpELT962YreCQyyeASjPjrgd9iPx3pZdFXztRUiRjUbruvD9d9bRFnb005jB3VNzn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
