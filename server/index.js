const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
const stripe = require('stripe')(
  'sk_test_51Q3Pzh2Kreos2QcTvaaswHvpuGdznCXhUaY3GtOlq31M5zsEfYyeIGcRxLPh0AZMe98twN8fZJtHxnrpW8zjbQJ800vR1rDmOs'
);

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/api/create-payment-intent', async (req, res) => {
  const model = req.body;

  const payment = await stripe.paymentIntents.create({
    amount: model.amount,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: payment.client_secret,
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
