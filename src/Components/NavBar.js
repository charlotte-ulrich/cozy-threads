import React, { useState } from 'react';
import { connect } from 'react-redux';
import EditCart from './EditCart';
import { getCart, addToCart, emptyCart } from '../store/redux/cart';

const NavBar = (props) => {
  const [showCart, setShowCart] = useState(false);
  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navLogo">
            <a href={`/`}>CT</a>
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
                {showCart && <EditCart props={props} />}
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart()),
  emptyCart: () => dispatch(emptyCart()),
  addToCart: (cartItem) => dispatch(addToCart(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
