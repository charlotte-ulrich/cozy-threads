const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET, {
  apiVersion: '2023-10-16',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'stripe-samples/accept-a-payment/payment-element',
    version: '0.0.2',
    url: 'https://github.com/stripe-samples',
  },
});

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, // Amount in cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
