import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string | StaticImageData;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  orderTotal: number;
};

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
};

const calculateTotals = (state: CartState) => {
  state.numItemsInCart = state.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  state.cartTotal = state.cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  state.orderTotal = state.cartTotal;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ product: CartItem }>) => {
      const { product } = action.payload;
      const item = action.payload.product;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
      calculateTotals(state);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      calculateTotals(state);
    },
    editItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        }
      }
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.numItemsInCart = 0;
      state.cartTotal = 0;
      state.orderTotal = 0;
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
