import React from 'react';
import { connect } from 'react-redux';
import { getCart, emptyCart } from '../store/redux/cart';
import { CheckoutForm } from './CheckoutForm';
import './Cart.css';

const EditCart = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.incrementHandler = this.incrementHandler.bind(this);
  //     this.decrementHandler = this.decrementHandler.bind(this);
  //     this.removeHandler = this.removeHandler.bind(this);
  //     console.log(this.props);
  //     const thisCart = this.props.cart.map((item) => item.product);
  //     const thisQuantity = this.props.cart.map((item) => item.quantity);
  //     this.state = {
  //       thisCart: thisCart,
  //       thisQuantity: thisQuantity,
  //     };
  //   }

  //   incrementHandler(productId) {
  //     let prodIndx = this.state.thisCart.findIndex(
  //       (item) => item.id === productId
  //     );
  //     let newQuantity = this.state.thisQuantity.map((item, index) => {
  //       if (index === prodIndx) {
  //         return item + 1;
  //       }
  //       return item;
  //     });
  //     this.props.addToCart({
  //       product: this.state.thisCart[prodIndx],
  //       quantity: this.state.thisQuantity[prodIndx] + 1,
  //     });
  //     this.setState({ thisQuantity: newQuantity });
  //   }
  //   decrementHandler(productId) {
  //     let prodIndx = this.state.thisCart.findIndex((item) => {
  //       return item.id === productId;
  //     });
  //     let delProd = this.state.thisCart[prodIndx];
  //     if (this.state.thisQuantity[prodIndx] === 1) {
  //       let newQuantity = this.state.thisQuantity.filter((item, index) => {
  //         return index != prodIndx;
  //       });
  //       let newCart = this.state.thisCart.filter((item, index) => {
  //         return index != prodIndx;
  //       });
  //       this.props.deleteCart(delProd);
  //       this.setState({ thisCart: newCart, thisQuantity: newQuantity });
  //     } else {
  //       let newQuantity = this.state.thisQuantity.map((item, index) => {
  //         if (index === prodIndx) {
  //           item -= 1;
  //           return item;
  //         }
  //         return item;
  //       });
  //       this.props.addToCart({
  //         product: this.state.thisCart[prodIndx],
  //         quantity: this.state.thisQuantity[prodIndx] - 1,
  //       });
  //       this.setState({ thisQuantity: newQuantity });
  //     }
  //   }

  //   removeHandler(productId) {
  //     let prodIndx = this.state.thisCart.findIndex((item) => {
  //       return item.id === productId;
  //     });
  //     let delProd = this.state.thisCart[prodIndx];
  //     let newQuantity = this.state.thisQuantity.filter((item, index) => {
  //       return index != prodIndx;
  //     });
  //     let newCart = this.state.thisCart.filter((item, index) => {
  //       return index != prodIndx;
  //     });
  //     this.props.deleteCart(delProd);
  //     this.setState({ thisCart: newCart, thisQuantity: newQuantity });
  //   }

  //   render() {
  // const checkOut = (
  //   <div>
  //     <Link to="/checkout-form">
  //       <button
  //         type="button"
  //         className="main-cta"
  //         id="checkout"
  //         onClick={() =>
  //           this.props.checkout(this.state.thisCart, this.state.thisQuantity)
  //         }
  //       >
  //         Go To Checkout
  //       </button>
  //     </Link>
  //   </div>
  // );
  const cartItems = props.cart;
  console.log(props);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <div>
        {cartItems !== undefined && cartItems.length > 0 ? (
          <div>
            {/* {checkOut} */}
            <ul className="all-product-view">
              {cartItems.map((product, index) => {
                console.log(product);
                const { products } = product;
                return (
                  <div key={products.id}>
                    <div>
                      <div className="single-product-container">
                        <img
                          className="cart-product-image"
                          src={products.imageUrl}
                        />
                      </div>
                      <div className="single-product-container">
                        <h2>{products.name}</h2>
                        <p className="cart-short-desc">
                          {products.shortDescription}
                        </p>
                        <h6>${products.price / 100}</h6>
                        <h6
                          key={
                            // product.id + '-' + this.state.thisQuantity[index]
                            products.id
                          }
                        >
                          Quantity: {product.quantity}
                        </h6>
                      </div>

                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => this.incrementHandler(products.id)}
                      >
                        {' '}
                        +{' '}
                      </button>
                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => this.decrementHandler(products.id)}
                      >
                        -
                      </button>
                      <button
                        className="cart-cta"
                        type="button"
                        onClick={() => this.removeHandler(products.id)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCart);
