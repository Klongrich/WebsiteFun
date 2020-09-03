import React , {useEffect, useState} from 'react'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import './cardStyles.css'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);


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

    const [status, setStatus] = useState("Waitting...");
  
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

        const {client_secret: clientSecret} = await response.json();
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

        setStatus("results.error.message");
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.

          setStatus("Payment Succceded!")
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
        <button disabled={!stripe}>
          Subscribe
        </button>
      </form>

      <h2> {status} </h2>
      </>
    );
  };



export default function Payment() {

    return (
        <>
            <Elements stripe={stripePromise}> 
                <div Style="height: 230px; 
                            width: 500px; 
                            border: 2px solid black;
                            margin-left: 100px;
                            margin-top: 200px;
                            padding-top: 0px;
                            padding-left: 30px;
                            padding-right: 60px;
                            background-color: grey;
                            border-radius: 20px">
                    <CheckoutForm />
                </div>
            </Elements>
        </>
        
    );
}