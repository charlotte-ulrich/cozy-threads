import { create } from 'zustand';

const resetState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const store = (set, get) => ({
  cart: resetState.cart,
  totalItems: resetState.totalItems,
  totalPrice: resetState.totalPrice,
  addToCart: (product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  increment: (product) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ),
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + product.price,
    }));
  },
  decrement: (product) => {
    const cart = get().cart;
    const totalItems = get().totalItems;
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem.quantity > 0 && totalItems > 0) {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - product.price,
      }));
    }
  },
  removeFromCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    }));
  },
});

const useStore = create(store);

export default useStore;
