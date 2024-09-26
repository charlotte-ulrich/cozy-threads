import React from 'react';
import useStore from '../store/store.js';
import './AllProducts.css';

const BestSellers = (props) => {
  const addToCart = useStore((state) => state.addToCart);

  const { products } = props;

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
                    onClick={() => addToCart(product)}
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

export default BestSellers;
