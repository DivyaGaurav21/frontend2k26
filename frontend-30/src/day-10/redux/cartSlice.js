import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const item = state.cartItems.find(
        (cartItem) => cartItem.id === product.id
      );

      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((item) => item.id === id);

      if (!item) return;

      item.quantity--;

      state.cartItems = state.cartItems.filter(
        (item) => item.quantity > 0
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;