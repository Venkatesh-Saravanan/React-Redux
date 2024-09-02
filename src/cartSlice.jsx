import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    incrementQuantity(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += state.items[itemIndex].price;
      }
    },
    decrementQuantity(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= state.items[itemIndex].price;
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;