import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51Ima6LSGHt0qO4cmUNVswKgHKvzBXcZ6mL2eL1DY4UC9Jf2RiUV6LGhUK43dqIbyiUKqFxB6YoK00kOEIQ215FHF00RLW7wt1E";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="AK Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
export default StripeCheckoutButton;
