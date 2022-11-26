import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { async } from "@firebase/util";
import toast from "react-hot-toast";

const CheckoutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [paymentId, setPaymentId]= useState('')

  const stripe = useStripe();
  const elements = useElements();

  const { price, email, patientName , _id} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-seven-beta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error);
    } else {
      setPaymentError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });
      if(confirmError){
        setPaymentError(confirmError)
        return
      }
      console.log(paymentIntent);
      if(paymentIntent.status === "succeeded"){
        setPaymentId(paymentIntent.id)
        toast.success('Payment successfull')

        const payment = {
          paymentId: paymentIntent.id,
          email,
          bookingId : _id
        }

        fetch('https://doctors-portal-server-seven-beta.vercel.app/payments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${localStorage.getItem("accessToken")}`,

          },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm my-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <p className=" text-red-500">{paymentError}</p>}
      {
        paymentId && <p className=" font-semibold">Your Payment Id :{paymentId}</p>
      }
    </>
  );
};

export default CheckoutForm;
