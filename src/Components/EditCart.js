import React, { useState } from 'react';
import useStore from '../store/store.js';
import Payment from './Payment.js';
import './EditCart.css';

const EditCart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const cart = useStore((state) => state.cart);

  const total = cart.reduce(
    (acc, product) => acc + (product.price / 100) * product.quantity,
    0
  );

  const removeFromCart = useStore((state) => state.removeFromCart);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  const openCheckout = async () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      <div>
        {cart !== undefined && cart.length > 0 ? (
          <div>
            <ul className="all-product-view">
              {cart.map((product) => {
                return (
                  <div key={product.id}>
                    <div>
                      <div className="single-image-container">
                        <img
                          className="cart-product-image"
                          src={product.imageUrl}
                        />
                      </div>
                      <div className="single-product-container">
                        <h2>{product.name}</h2>
                        <p className="cart-short-desc">
                          {product.shortDescription}
                        </p>
                        <h6>${product.price / 100}</h6>
                        <h6 key={product.id}>Quantity: {product.quantity}</h6>
                      </div>

                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => increment(product)}
                      >
                        {' '}
                        +{' '}
                      </button>
                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => decrement(product)}
                      >
                        -
                      </button>
                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
            <div className="total-amount">Total: ${total}</div>
            <button className="cart-cta" onClick={openCheckout}>
              Pay Now
            </button>
            {showCheckout && (
              <Payment stripePromise={props.stripePromise} total={total} />
            )}
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </div>
  );
};

export default EditCart;
