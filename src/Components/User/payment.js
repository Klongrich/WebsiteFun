import React, { useState } from 'react'

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import styled from "styled-components";



import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import './cardStyles.css'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HN56YDU0KM7WRE6u7DqgRNnrMvVWencqPgmaW5ZWiFJpdA6GKeAUPG0ENxkjoWxrbeLCADHu7FLivGjUtow8ZQ8002mQQjoxY');


const CARD_OPTIONS = {
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "red",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }


    const response = await fetch('http://localhost:3020/secret');

    const { client_secret: clientSecret } = await response.json();
    // Call stripe.confirmCardPayment() with the client secret.

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)

      setStatus(result.error.message);
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.

        setStatus("Payment Succceded! Thank You For Subscribing")
      }
    }

    console.log(result);

  };


  return (
    <>
      <form onSubmit={handleSubmit}>

        <h2> Card Details</h2>
        <CardElement options={CARD_OPTIONS} />

        <br />
        <button Style="padding:5px; 
                       padding-left: 20px; 
                       padding-right: 20px;
                       border-radius: 5px;
                       font-family: sans-serif" disabled={!stripe}>
          Subscribe: $10 / Month
        </button>
      </form>
      <h2> {status} </h2>
    </>
  );
};

const Background = styled.div`

    background-color:#d9e0ff;
    height: 580px;
    padding-top: 10px;

    ul{
       margin-left: 40px;
    }

    li {
        padding-bottom: 10px;
    }
`

export default function Payment() {

  return (
    <>
      <Background>

        <h2 Style="margin-left: 40px;"> Why Subscribe? </h2>

        <ul>
          <li>Weekly / Monthly News Letters</li>
          <li>Access To Past Trades</li>
          <li>Exclusive Stock and Crypto Picks</li>
          <li>Updates On Which Direction I Think The Market Will Go</li>
        </ul>

        <Elements stripe={stripePromise}>
          <div Style="height: 240px; 
                            width: 550px; 
                            border: 2px solid black;
                            margin-left: 50px;
                            padding-top: 0px;
                            padding-left: 30px;
                            padding-right: 60px;
                            background-color: grey;
                            border-radius: 20px">
            <CheckoutForm />
          </div>
        </Elements>

      </Background>
    </>

  );
}