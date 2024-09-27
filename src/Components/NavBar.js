import React, { useState } from 'react';
import EditCart from './EditCart';
import useStore from '../store/store';

const NavBar = (props) => {
  const [showCart, setShowCart] = useState(false);
  const handleClick = () => {
    setShowCart(!showCart);
  };
  console.log(props);
  const cartItems = useStore((state) => state.totalItems);
  const cart = useStore((state) => state.cart);

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navLogo">
            <a href={`/`}>Cozy Threads</a>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/products">Shop All</a>
              </li>
              <li>
                <a href="/best-sellers">Best Sellers</a>
              </li>
              <li>
                <button onClick={handleClick}>
                  <img
                    className="cart-icon"
                    src={
                      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Shopping-cart-transparent-icon.png'
                    }
                  />
                </button>
                {showCart && (
                  <EditCart
                    stripePromise={props.stripePromise}
                    items={cartItems}
                    cart={cart}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
