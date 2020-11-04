import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = "pk_test_51HjdfcHcxjyBPMbxFJ52NvxiyberouiJqVHYwyiwkSlzl1Y7VoJ6klzgLkwpEPifqhKhebMKzHO9ck1ZlfS67kWF00aDaf0uTd";

  const ontToken = token => {
    console.log(token)
    alert("Payment Successful")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Crown Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUZ.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={ontToken}
      stripeKey={publishableKey}
    />
  );
 
};

export default StripeCheckOutButton;