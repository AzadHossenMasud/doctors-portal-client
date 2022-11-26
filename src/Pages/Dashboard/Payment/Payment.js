import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M7zGuEX2U0BkhvoLGpkZpu9lXwwoYpMpTstdForVZiBtLueE3xx1ednnzaNz8bKR8LZdF6wBD0UVgo9ZjatA7IX00Ni79mSKN"
);

const Payment = () => {
  const booking = useLoaderData();
  // console.log(booking);
  const { treatmentName, price, bookingDate, slot } = booking;
  return (
    <div>
      <h3 className=" text-2xl">Payment for {treatmentName}</h3>
      <p>
        Please pay <span className=" font-semibold">${price}</span> for your
        appointment on {bookingDate} at {slot}
      </p>

      <div className=" w-96 mt-5 border-2">
      <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking} />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
