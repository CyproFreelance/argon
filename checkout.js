import { loadStripe } from "@stripe/stripe-js";

import React from "react";

export async function checkout({ items }) {
  let stripePromise = null;
  const init_stripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.STRIPE_PUBLIC_API_KEY);
    }
    return stripePromise;
  };
  const stripe = await init_stripe();
  await stripe.redirectToCheckout({
    mode: "payment",
    items,
    successUrl: `${window.location.origin}?ssid={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}

/*
 * The checkout function manages the stripe API.
 * It has a variable (initially set to null) that tells if we already have a stripe promise, if yes, then we simply return it otherwise, we gotta assign a promise to the variable.
 * the init_stripe does it for us.
 * 
 * inside the init stripe method, we need to loadStripe using the official stripe api key. 
 * just follow these steps to get yours.
       ! go to developers tab
       ! go to api keys tab
       ! copy the publishable key and replace STRIPE_PUBLIC_API_KEY with that key.
 
 * here ssid is basically the session id. 

 * now go to a specific product page. for example: /products/fortnite_public       
*/
