import React from 'react';
import { connect } from 'react-redux';
import { getCart, addToCart, emptyCart } from '../store/redux/cart';
import './AllProducts.css';

const products = [
  {
    id: 1,
    imageUrl:
      'https://www.roughlinen.com/cdn/shop/files/Wool_throw_grey_1_2000x.jpg?v=1712178866',
    name: 'Cashmere Throw',
    shortDescription:
      'Our best quality cashmere now large enough to cuddle up on your couch. This 100% cashmere throw is a classic style to fit your decor, but luxurious enough to feel like a special new addition to your space.',
    price: 16000,
  },
  {
    id: 3,
    imageUrl:
      'https://www.turmerry.com/cdn/shop/products/waffle-weave-organic-cotton-blanket-and-throw-turmerry-2_1200x1200.jpg?v=1641610438',
    name: 'Waffle Knit Throw',
    shortDescription:
      'This throw is our lightest and softest knit, perfect for those cool summer nights. Despite its loose knit, this waffle weave is as cozy as it gets, while keeping you cool.',
    price: 9000,
  },
  {
    id: 6,
    imageUrl:
      'https://colorfulstandard.com/cdn/shop/products/Merino_Wool_Beanie-Beanie-CS5081-Desert_Khaki_a87ce051-deda-4652-904c-fa64a391beec.jpg?v=1639445728&width=2048',
    name: 'Unisex Wool Beanie',
    shortDescription:
      'Level up your warmth this winter with our signature unisex wool beanie. This beanie is made of our highest quality cashmere and is the perfect addition to your winter style.',
    price: 4500,
  },
  {
    id: 8,
    imageUrl:
      'https://turnbullandasser.com/cdn/shop/products/AFSC3221_205797_2026_H.jpg?v=1666007109',
    name: 'Lambswool Scarf',
    shortDescription:
      'We sourced the finest lambswool available for this winter staple. this is our most versatile piece and is a winter staple.',
    price: 5500,
  },
];

const BestSellers = (props) => {
  const addToCart = (product) => {
    props.addToCart({
      products: product,
      quantity: 1,
    });
  };

  return (
    <div>
      <div className="all-products-page">
        <ul className="all-product-view">
          {products.map((product) => {
            return (
              <div key={product.id} className="all-products">
                <div>
                  <img className="all-product-image" src={product.imageUrl} />
                  <h3 className="all-product-name">{product.name}</h3>
                  <p className="short-desc">{product.shortDescription}</p>
                  <h5 className="all-product-price">${product.price / 100}</h5>
                </div>
                <div className="all-button-container">
                  <button
                    type="button"
                    onClick={() => this.addToCart(product)}
                    className="all-add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart()),
  emptyCart: () => dispatch(emptyCart()),
  addToCart: (cartItem) => dispatch(addToCart(cartItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BestSellers);
