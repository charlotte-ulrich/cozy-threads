import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

function Payment(props) {
  // const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState('');
  console.log(clientSecret);
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent')
      .then((res) => res.json())
      .then(({ clientSecret }) => {
        try {
          setClientSecret(clientSecret);
        } catch (error) {
          console.log(error);
        }
      });
  }, []);

  // useEffect(() => {
  //   // Fetch the client secret from your server
  //   const fetchClientSecret = async () => {
  //     const response = await fetch('/api/create-payment-intent', {
  //       method: 'POST',
  //     });
  //     const data = await response.json();
  //     setClientSecret(data.clientSecret);
  //   };
  //   fetchClientSecret();
  // }, []);

  return (
    <>
      <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
