import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLC } from '../../utils/getCartFromLC';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { ICartState, TCartItem } from './types';

const { items, totalPrice } = getCartFromLC();

const initialState: ICartState = {
  items,
  totalPrice,
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 });
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem && findItem.count--;
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<TCartItem>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, minusItem } = slice.actions;

export default slice.reducer;
