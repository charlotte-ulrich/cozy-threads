import React from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import EditCart from './Components/EditCart';
import BestSellers from './Components/BestSellers';
import CheckoutForm from './Components/CheckoutForm';
import ConfirmationPage from './Components/ConfirmationPage';
import history from './history';
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route exact path="/best-sellers" element={<BestSellers />} />
          <Route path="/cart" element={<EditCart />} />
          <Route path="/checkout-form" element={CheckoutForm} />
          <Route path="/confirmation-page" element={ConfirmationPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
