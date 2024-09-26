const initialState = [];

export const EMPTY_CART = 'EMPTY_CART';
export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const CHECKOUT = 'CHECKOUT';

export const addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const getCart = () => {
  return {
    type: GET_CART,
  };
};

export const deleteCart = (product) => {
  return {
    type: DELETE_CART_ITEM,
    product,
  };
};

export const checkoutCart = (cart, userId) => {
  return {
    type: CHECKOUT,
    checkoutData: { cart, userId },
  };
};

export default function cartReducer(cart = initialState, action) {
  let currentCart;
  switch (action.type) {
    case GET_CART:
      return cart;
    case EMPTY_CART:
      return [];
    case ADD_TO_CART:
      currentCart = cart.filter(
        (item) => item.product.id !== action.cartItem.product.id
      );
      currentCart.push(action.cartItem);
      return currentCart;
    case DELETE_CART_ITEM:
      currentCart = cart.filter(
        (item) => item.product.id !== action.product.id
      );
      return currentCart;
    case CHECKOUT:
      return cart;
    default:
      return cart;
  }
}
