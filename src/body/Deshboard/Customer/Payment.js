import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51IeIpBDIdQNTuCf26k9Zjd2ED8m6WtQs9c1IZuu5RMHU6bIRSuIRbc0BDcwjSsjtQqMkzNrFZkrm0f3EThA8tFGa00g2I0bokG"
);

const Payment = ({setpayment}) => {
  return (
    <div className="col-md-6 m-auto">
      <Elements stripe={stripePromise}>
       <CheckoutForm  setpayment={setpayment}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
