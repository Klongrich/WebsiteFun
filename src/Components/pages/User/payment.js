import React , {useEffect, useState} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


export default function Payment() {

    return (
        <div Style="width: 30%">
        <Elements stripe={stripePromise}>
        
            <h2> Strip Payment Demo </h2>
            <CardElement
                options={{
                    style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                        },
                    },
                invalid: {
                    color: '#9e2146',
                },
                },
                }}
            />
        
        </Elements>
        </div>
    );
}