import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

import type {Product} from './productsSlice';

interface InitialState {
  touched: boolean;
  open: boolean;
  items: Product[];
}

const initialState = {
  touched: false,
  open: false,
  items: [],
} as InitialState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<boolean>) => {
      if (!state.touched) state.touched = true;

      state.open = action.payload;
    },

    resetCartState: (state) => {
      state.open = false;
      state.touched = false;
    },

    updateCartItems: (
      state,
      action: PayloadAction<{
        items: Product[];
      }>
    ) => {
      const {items} = action.payload ?? {};
      state.items = items;
    },
  },
});

export const {setCart, resetCartState, updateCartItems} = cart.actions;

export default cart.reducer;
