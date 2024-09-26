import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import BestSellers from './Components/BestSellers';
import CheckoutForm from './Components/CheckoutForm';
import ConfirmationPage from './Components/ConfirmationPage';
import { allProducts, bestSellers } from './products';
import './App.css';

const App = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch('/api/config').then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products"
            element={<AllProducts products={allProducts} />}
          />
          <Route
            exact
            path="/best-sellers"
            element={<BestSellers products={bestSellers} />}
          />
          <Route path="/checkout-form" element={CheckoutForm} />
          <Route path="/confirmation-page" element={ConfirmationPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
