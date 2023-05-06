import { products } from "../data/Products";
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
} from "../types";

export const initialState = {
  products: products,
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItemInCart = state.products.find(
        (item) => item.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItemInCart.id);
      console.log(state.cart);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItemInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItemInCart, quantity: 1 }],
          };
    }
    case REMOVE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== itemToDelete.id),
          };
    }

    case REMOVE_ALL_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== itemToDelete.id),
      };
    }

    case CLEAR_CART: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
