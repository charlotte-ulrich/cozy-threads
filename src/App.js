import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import ConfirmationPage from './Components/ConfirmationPage';
import { allProducts } from './products';
import './App.css';

const App = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch('/api/config').then(async (r) => {
      try {
        const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
        setStripePromise(loadStripe(publishableKey));
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div>
      <NavBar stripePromise={stripePromise} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products"
            element={
              <AllProducts
                stripePromise={stripePromise}
                products={allProducts}
              />
            }
          />
          <Route
            path="/completion"
            element={<ConfirmationPage stripePromise={stripePromise} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
