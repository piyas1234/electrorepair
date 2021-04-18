import React, { useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import ResponsiveFontSize from  "./ResponsiveFontSize";
import './Payment.css'
const useOptions = () => {
  const fontSize = ResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const CardForm = ({setpayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    payload.error?
     setpayment("error"):
     setpayment("success")
    console.log("[PaymentMethod]", payload);
  };
  
  return (
    <>
    <form className="" onSubmit={handleSubmit}>
      <label className="label">
        Card details
        <CardElement
        
          options={options}
          onReady={() => {
            console.log("CardElement [ready]");
          }}
          onChange={event => {
            console.log("CardElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardElement [blur]");
          }}
          onFocus={() => {
            console.log("CardElement [focus]");
          }}
        />
      </label>
      <br/>
      <button className="button " type="submit" disabled={!stripe}>
     Pay
   </button>
    </form>
     
   </>
  );
};

export default CardForm;
